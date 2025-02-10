import ChatWrapper from "@/components/ChatWrapper";
import InvalidUrl from "@/components/InvalidUrl";
import { isValidUrl, urlFixer } from "@/lib/helpers";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";
import React from "react";

interface IPageProps {
  url: string | string[] | undefined;
}

const Page = async (props: { params: Promise<IPageProps> }) => {
  const params = await props.params;
  const sessionCookie = (await cookies()).get("sessionId")?.value;

  //reconstructing url
  const fixedUrl = urlFixer(params.url as string[]);

  //Check if url is valid
  if (!isValidUrl(fixedUrl)) {
    return <InvalidUrl />;
  }
  //creating session id by merging url and session cookie
  // and replacing all the slashes so they don't cause issues
  const sessionId = (fixedUrl + "@@" + sessionCookie).replace(/\//g, "");

  //check if url is already indexed so we don't index it again
  const isUrlAlreadyIndexed = await redis.sismember("indexed-urls", fixedUrl);

  //retrieving the last 10 messages
  //TODO: implement infinite scrolling
  const initialMessages = await ragChat.history.getMessages({
    amount: 10,
    sessionId,
  });
  //if not indexed, index it and add to indexed-urls
  if (!isUrlAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: fixedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });

    await redis.sadd("indexed-urls", fixedUrl);
  }

  return (
    <div className="h-screen dark text-foreground bg-background">
      <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
    </div>
  );
};

export default Page;

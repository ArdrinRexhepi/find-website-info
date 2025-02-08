import ChatWrapper from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import React from "react";

interface IPageProps {
  url: string | string[] | undefined;
}

const urlFixer = (url: string[]) => {
  return url.map((part) => decodeURIComponent(part)).join("/");
};

const Page = async (props: { params: Promise<IPageProps> }) => {
  const params = await props.params;
  console.log("params", params);

  if (!params && params != undefined) return <>No url available</>;

  //reconstructing url
  const fixedUrl = urlFixer(params.url as string[]);

  //check if url is already indexed so we don't index it again
  const isUrlAlreadyIndexed = await redis.sismember("indexed-urls", fixedUrl);
  console.log("isUrlAlreadyIndexed", isUrlAlreadyIndexed);

  //if not indexed, index it and add to indexed-urls
  if (!isUrlAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: fixedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });

    await redis.sadd("indexed-urls", fixedUrl);
  }

  const sessionId = "mock-session";

  return <ChatWrapper sessionId={sessionId} />;
};

export default Page;

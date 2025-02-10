import { type Message as TMessage } from "ai";
import Message from "./Message";
import { Bot, MessageSquare } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useRef } from "react";

const Messages = ({
  messages,
  isLoading,
}: {
  messages: TMessage[];
  isLoading: boolean;
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  return (
    <div className="flex max-h-[calc(100vh-3rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col justify-center items-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="font-semibold text-xl text-white">
            You&apos;re all set!
          </h3>
          <p className="text-zinc-500 text-sm">
            Ask your first question to get started.
          </p>
        </div>
      )}
      {isLoading && (
        <div className="bg-zinc-900/25">
          <div className="p-6">
            <div className="max-w-3xl mx-auto flex items-start gap-2.5">
              <div className="size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center">
                <Bot className="size-5 text-white" />
              </div>
              <div className="flex flex-col ml-6 w-full">
                <div className="flex space-x-2 items-center">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Website
                  </span>
                </div>
                <p className="text-sm font-normal py-2.5 dark:text-white text-gray-900">
                  <div className="flex items-center space-x-2 mt-4 max-w-3xl">
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-3 w-3 rounded-full" />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;

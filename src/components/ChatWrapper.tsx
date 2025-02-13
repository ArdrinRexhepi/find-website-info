"use client";

import { Message, useChat } from "ai/react";
import Messages from "./Messages";
import { ChatInput } from "./ChatInput";

const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const {
    messages,
    handleInputChange,
    input,
    handleSubmit,
    setInput,
    isLoading,
  } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
    initialMessages,
  });
  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        <Messages messages={messages} isLoading={isLoading} />
      </div>
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
      />
    </div>
  );
};

export default ChatWrapper;

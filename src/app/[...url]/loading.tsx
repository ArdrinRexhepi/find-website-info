import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ArrowUp, Bot, User } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col h-screen bg-zinc-900 divide-y divide-zinc-700 justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        {["user", "bot", "user", "bot"].map((item, index) => (
          <div
            className={cn({
              "bg-zinc-800": item === "user",
              "bg-zinc-900/25": item === "bot",
            })}
            key={index}>
            <div className="p-6">
              <div className="max-w-3xl mx-auto flex items-start gap-2.5">
                <div
                  className={cn(
                    "size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center",
                    {
                      "bg-blue-950 border-blue-700 text-zinc-200":
                        item === "user",
                    }
                  )}>
                  {item === "user" ? (
                    <User className="size-5" />
                  ) : (
                    <Bot className="size-5 text-white" />
                  )}
                </div>
                <div className="flex flex-col ml-6 w-full">
                  <div className="flex space-x-2 items-center">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {item === "user" ? "You" : "Website"}
                    </span>
                  </div>
                  <p className="text-sm font-normal py-2.5 dark:text-white text-gray-900">
                    <div className="flex items-center space-x-2 mt-4 max-w-3xl">
                      <Skeleton className="h-4 w-[90%]" />
                      <Skeleton className="h-4 w-[90%]" />
                    </div>
                    <div className="flex items-center space-x-2 mt-1 max-w-3xl">
                      <Skeleton className="h-4 w-[90%]" />
                      <Skeleton className="h-4 w-[90%]" />
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className=" bg-zinc-800/85 p-4 border-t border-border">
        <div className="max-w-3xl mx-auto relative">
          <Textarea
            placeholder="Message..."
            className="resize-none pr-12 bg-zinc-800"
            disabled
          />
          <Button
            size="icon"
            className="absolute right-2 bottom-2 bg-primary text-primary-foreground"
            disabled>
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Loading;

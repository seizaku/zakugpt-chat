"use client";
import Container from "@/components/layouts/container";
import MessageSection from "@/components/message-section";
import { useChatStore } from "@/lib/chat-store";
import { Skeleton } from "@/components/ui/skeleton";
import { useChatState } from "@/lib/chat-store";

const MessageLayout = () => {
  const { chat } = useChatStore();
  const { isChatPending } = useChatState();

  return (
    <Container className="grid grid-cols-1 pt-6 justify-self-center pb-24">
      {chat.map(({ isUser, message }, index) => {
        return <MessageSection key={index} isUser={isUser} message={message} />;
      })}
      {isChatPending && (
        <>
          <section className="container mx-auto mt-6 flex w-full flex-1 gap-4 xl:w-3/6">
            <Skeleton
              className={
                "h-28 w-96 rounded-xl bg-neutral-50 p-6 dark:bg-zinc-800 cursor-pointer rounded-bl-none float-left"
              }
            />
          </section>
        </>
      )}
    </Container>
  );
};

export default MessageLayout;

"use client";
import Container from "@/components/layouts/container";
import MessageSection from "@/components/message-section";
import { useChatStore } from "@/lib/chat-store";
import { Skeleton } from "@/components/ui/skeleton";
import { useChatState } from "@/lib/chat-store";
import { useEffect, useRef } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const MessageLayout = () => {
  const { chat } = useChatStore();
  const { isChatPending } = useChatState();
  const skeletonRef = useRef();

  useEffect(() => {
    const scrollToSkeleton = () => {
      skeletonRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToSkeleton();
  }, [isChatPending]);
  return (
    <Container className="grid grid-cols-1 pt-6 justify-self-center pb-24">
      {chat.map(({ prompt, response, image }, index) => {
        return (
          <>
            {prompt.includes("image:") ? (
              <MessageSection prompt={prompt} image={response} />
            ) : (
              <MessageSection key={index} prompt={prompt} response={response} />
            )}
          </>
        );
      })}
      {isChatPending && (
        <>
          <section
            ref={skeletonRef}
            className="container mx-auto mt-6 w-full flex-1 gap-4 xl:w-3/6"
          >
            <Skeleton className="w-full h-24" />
            <Skeleton className="w-40 mt-8 h-6" />
            <Skeleton className="w-full h-6 mt-4" />
            <Skeleton className="w-[80%] h-6 my-4" />
            <Skeleton className="w-[90%] h-6 my-4" />

            <Skeleton className="w-40 mt-8 h-6" />
            <Skeleton className="w-full h-6 mt-4" />
            <Skeleton className="w-[80%] h-6 my-4" />
            <Skeleton className="w-[90%] h-6 my-4" />
          </section>
        </>
      )}
    </Container>
  );
};

export default MessageLayout;

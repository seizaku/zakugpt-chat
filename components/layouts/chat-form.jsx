"use client";

import { Button } from "@/components/ui/button";
import { FiSend, FiLoader } from "react-icons/fi";
import { useState } from "react";
import { useChatStore, useChatState } from "@/lib/chat-store";
import axios from "axios";
import { useRef } from "react";

const ChatForm = () => {
  const { sendPrompt } = useChatStore();
  const { isChatPending, setChatState } = useChatState();

  const [prompt, setPrompt] = useState("");
  const inputRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    setChatState(true);
    sendPrompt({ isUser: true, message: prompt });
    await axios
      .post("/api/ask", {
        prompt,
      })
      .then((res) => {
        setPrompt("");
        setChatState(false);
        sendPrompt({ isUser: false, message: res?.data.message });
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  };

  return (
    <section className="fixed bg-background bottom-0 h-16 md:h-32 rounded-t-2xl w-full border-t md:border-none md:bg-gradient-to-b from-transparent via-transparent to-zinc-100 dark:to-zinc-900 dark:bg-zinc-900 pt-6 md:dark:bg-transparent">
      <div className="flex h-full w-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex h-16 mb-1 w-96 gap-2 px-2 md:mr-72 md:w-[50%] md:gap-0"
        >
          <textarea
            ref={inputRef}
            onChange={(e) => setPrompt(e.target.value)}
            className="block h-11 md:h-14 md:text-[16px] md:font-normal md:py-4 md:ml-12 w-full md:drop-shadow-lg resize-none overflow-y-hidden rounded-full border bg-background dark:bg-zinc-900 md:dark:bg-zinc-800 px-4 py-2.5 text-sm text-foreground outline-0 md:rounded-md md:rounded-r-none md:border-r-0"
            placeholder="Send message"
          ></textarea>
          <Button
            variant="outline"
            className="h-11 md:h-14 md:mr-12 w-16 md:w-24 md:bg-background dark:bg-zinc-800 dark:hover:bg-zinc-800 rounded-full md:drop-shadow-lg md:rounded-md md:rounded-l-none md:border-l-0"
          >
            {isChatPending && (
              <FiLoader className="text-foreground animate-spin" />
            )}
            {!isChatPending && <FiSend className="text-foreground" />}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ChatForm;

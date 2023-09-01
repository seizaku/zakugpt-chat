"use client";

import { Button } from "@/components/ui/button";
import { FiSend, FiLoader } from "react-icons/fi";
import { useState } from "react";
import { useChatStore, useChatState } from "@/lib/chat-store";
import axios from "axios";
import { useRef } from "react";

const PromptForm = () => {
  const { chat, sendPrompt } = useChatStore();
  const { isChatPending, setChatState } = useChatState();

  const [prompt, setPrompt] = useState("");
  const inputRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    setChatState(true);
    await axios
      .post("/api/ask", {
        prompt,
        previousResponse: chat[chat.length - 1].response,
      })
      .then((res) => {
        setChatState(false);
        sendPrompt({ prompt, response: res.data.message });
        setPrompt("");
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  };

  return (
    <>
      <section className="fixed bottom-0 h-16 md:h-32 rounded-t-2xl w-full border-t md:border-none md:bg-gradient-to-b from-transparent via-transparent to-zinc-100 dark:to-zinc-900 dark:bg-zinc-900 pt-6 md:dark:bg-transparent">
        <div className="flex h-full w-full items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex h-16 mb-1 w-96 px-2 md:mr-72 md:w-[50%] md:gap-0"
          >
            <textarea
              ref={inputRef}
              onChange={(e) => setPrompt(e.target.value)}
              className="pl-6 h-11 md:h-14 md:text-[16px] md:font-normal md:py-4 md:ml-12 w-full resize-none overflow-y-hidden rounded-full border bg-background dark:bg-zinc-800 py-2.5 text-sm outline-0 rounded-r-none border-r-0"
              placeholder="Ask me anything.."
            ></textarea>
            <Button
              variant="outline"
              className="rounded-full h-11 md:h-14 md:mr-12 w-16 md:w-24 pr-6 bg-background dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-l-none border-l-0"
            >
              {isChatPending && (
                <FiLoader className="text-foreground animate-spin" />
              )}
              {!isChatPending && <FiSend className="text-foreground" />}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PromptForm;

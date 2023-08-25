import { Button } from "@/components/ui/button";
import { FiSend } from "react-icons/fi";

const ChatForm = () => {
  return (
    <section className="fixed bottom-0 h-16 md:h-32 w-full border-t md:border-none md:bg-gradient-to-b from-transparent via-transparent to-zinc-900 bg-white dark:bg-zinc-900 pt-6 md:dark:bg-transparent">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-16 mb-1 w-96 gap-2 px-2 md:mr-72 md:w-[50%] md:gap-0">
          <textarea
            className="block h-11 md:h-14 md:text-md md:py-4 md:ml-12 w-full md:drop-shadow-lg resize-none overflow-y-hidden rounded-full border bg-background dark:bg-zinc-900 md:dark:bg-zinc-800 px-4 py-2.5 text-sm text-foreground outline-0 md:rounded-md md:rounded-r-none md:border-r-0"
            placeholder="Send message"
          ></textarea>
          <Button
            variant="outline"
            className="h-11 md:h-14 md:mr-12 w-16 md:w-24 md:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-900 rounded-full md:drop-shadow-lg md:rounded-md md:rounded-l-none md:border-l-0"
          >
            <FiSend className="text-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatForm;

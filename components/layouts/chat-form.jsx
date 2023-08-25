import { Button } from "@/components/ui/button";
import { FiSend } from "react-icons/fi";

const ChatForm = () => {
  return (
    <section className="fixed bottom-0 h-16 w-full border-t bg-white dark:bg-zinc-900 pt-6">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-16 w-96 gap-2 px-2 md:mr-72 md:w-[50%] md:gap-0">
          <textarea
            className="block h-10 w-full resize-none overflow-y-hidden rounded-full border bg-background dark:bg-zinc-900 px-3 py-2.5 text-sm text-foreground outline-0 md:rounded-md md:rounded-r-none md:border-r-0"
            placeholder="Send message"
          ></textarea>
          <Button
            variant="outline"
            className="h-10 w-12 rounded-full md:rounded-md md:rounded-l-none md:border-l-0"
          >
            <FiSend className="text-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatForm;

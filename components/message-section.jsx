const MessageSection = ({ message, isUser }) => {
  return (
    <section
      className={`container mx-auto mt-6 flex ${
        isUser && "justify-end"
      } w-full flex-1 gap-4 xl:w-3/6`}
    >
      <article
        className={`rounded-xl bg-neutral-50 p-6 dark:bg-zinc-800 cursor-pointer ${
          !isUser ? "rounded-bl-none w-96 md:w-[80%]" : "rounded-br-none w-fit"
        }`}
        dangerouslySetInnerHTML={{ __html: message }}
      ></article>
    </section>
  );
};

export default MessageSection;

const MessageSection = ({ children, isAI }) => {
  return (
    <section className="container mx-auto my-6 flex w-full flex-1 gap-4 xl:w-3/6">
      <article
        className={`rounded-xl bg-neutral-50 p-6 dark:bg-zinc-800 cursor-pointer ${
          isAI ? "rounded-bl-none" : "rounded-br-none"
        }`}
      >
        {children}
      </article>
    </section>
  );
};

export default MessageSection;

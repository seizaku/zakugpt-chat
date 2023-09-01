import { create } from 'zustand'

export const useChatStore = create((set, get) => ({
  chat: [
    {
    prompt: "Hello World!",
    response: `This website is created by <b>Landrei Zerna</b>, a first-year computer science student from <b>Western Mindanao State University</b>!
    
    Ask <b>ZakuChat</b> anything and let it assist you with your queries.
    If you want to generate an image, use the following format:
    
    <b>image: "write your prompt here".</b>
    
    How can I assist you today?`
  },
],
  sendPrompt: ({prompt, response}) => {
    let data = get().chat;
    data.push({
      prompt,
      response
    });
    set(data);
  }
}))

export const useChatState = create((set) => ({
  isChatPending: false,
  setChatState: (state) => set({isChatPending: state})
}));
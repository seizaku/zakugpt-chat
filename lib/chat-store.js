import { create } from 'zustand'

export const useChatStore = create((set, get) => ({
  chat: [{
    isUser: false,
    message: "<p class='paragraph-text'>Hello, how can I be of assistance today?</p>"
  }],
  sendPrompt: ({isUser, message}) => {
    let data = get().chat;
    data.push({
      isUser,
      message
    });
    set(data);
  }
}))

export const useChatState = create((set) => ({
  isChatPending: false,
  setChatState: (state) => set({isChatPending: state})
}));
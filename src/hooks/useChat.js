import { useState, useEffect } from "react";
import { GROQ_URL, GROQ_API_KEY } from "../constants";

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Load saved chats
  useEffect(() => {
    const saved = localStorage.getItem("chat_history");
    if (saved) setChats(JSON.parse(saved));
  }, []);

  // Save chat to history
  const saveChat = (title) => {
    const newChat = {
      id: Date.now(),
      title,
      messages,
    };

    const updated = [newChat, ...chats];
    setChats(updated);
    localStorage.setItem("chat_history", JSON.stringify(updated));
  };

  const clearChat = () => {
    setMessages([]);
    setChats([]);
    localStorage.removeItem("chat_history");
  };

  const loadChat = (chat) => {
    setMessages(chat.messages);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    if (messages.length === 0) saveChat(input.substring(0, 30));

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const payload = {
        model: "llama-3.3-70b-versatile",
        messages: [...messages, userMsg],
      };

      const res = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      const aiMsg = {
        role: "assistant",
        content: data?.choices?.[0]?.message?.content || "No response",
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return {
    messages,
    chats,
    input,
    setInput,
    loading,
    clearChat,
    loadChat,
    sendMessage,
  };
}

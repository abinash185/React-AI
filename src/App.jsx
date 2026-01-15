import useChat from "./hooks/useChat";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

export default function App() {
  const {
    messages,
    chats,
    input,
    setInput,
    loading,
    clearChat,
    loadChat,
    sendMessage,
  } = useChat();

  return (
    <div className="flex h-screen bg-zinc-900 text-white">
      <Sidebar chats={chats} loadChat={loadChat} />

      <div className="flex flex-col flex-1">
        <Header clearChat={clearChat} />
        <ChatWindow messages={messages} loading={loading} />
        <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

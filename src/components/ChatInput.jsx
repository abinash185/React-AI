export default function ChatInput({ input, setInput, sendMessage }) {
  return (
    <div className="p-4 border-t border-zinc-700">
      <div className="bg-zinc-800 flex items-center rounded-3xl p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask anything..."
          className="bg-transparent w-full px-4 py-3 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-2xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}

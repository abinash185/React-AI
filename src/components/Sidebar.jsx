export default function Sidebar({ chats, loadChat }) {
  return (
    <div className="hidden md:flex w-64 bg-zinc-950 border-r border-zinc-800 flex-col">
      <button
        onClick={() => loadChat({ messages: [] })}
        className="m-3 py-2 px-4 bg-zinc-800 rounded-xl hover:bg-zinc-700"
      >
        + New Chat
      </button>

      <div className="px-3 mt-2 text-sm text-gray-400">Recent Chats</div>

      <div className="flex-1 overflow-y-auto mt-2 space-y-2 p-3">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="p-3 bg-zinc-800 rounded-xl hover:bg-zinc-700 cursor-pointer"
            onClick={() => loadChat(chat)}
          >
            {chat.title}
          </div>
        ))}
      </div>

      <div className="p-3 text-gray-500 text-xs">© Abinash AI Assistant</div>
    </div>
  );
}

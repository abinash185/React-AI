export default function Header({ clearChat }) {
  return (
    <div className="p-4 border-b border-zinc-700 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Abinash AI</h1>

      <button
        onClick={clearChat}
        className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg"
      >
        Clear Chat
      </button>
    </div>
  );
}

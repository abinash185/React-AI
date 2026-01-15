export default function MessageBubble({ message }) {
  return (
    <div
      className={`flex ${
        message.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xl px-4 py-2 rounded-2xl ${
          message.role === "user"
            ? "bg-indigo-600 text-white"
            : "bg-zinc-800 text-gray-200"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}

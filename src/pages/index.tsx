import React from "react";

const clients = ["Client 1", "Client 2", "Client 3"];

export default function Home() {
  const [input, setInput] = React.useState<string>("");
  const [messages, setMessages] = React.useState<
    { sender: string; text: string }[]
  >([]);

  const handleSend = async () => {
    if (!input.trim()) return; // ignore empty messages

    // Add user message immediately
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const currentInput = input; // capture input before clearing
    setInput(""); // clear the input field

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: currentInput }),
      });

      const data = await res.json();

      // Add bot reply
      setMessages((prev) => [...prev, { sender: "bot", text: data.answer }]);
    } catch (err) {
      console.error("Error talking to backend:", err);
    }
  };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2 min-h-screen">
        {/* Sidebar with clients */}
        <div className="h-screen backdrop-blur-lg bg-[rgba(30,41,59,0.8)] rounded-lg text-center col-span-1">
          <div className="p-1 text-center text-4xl h-10 mb-10 m-4 rounded-xl">
            Clients
          </div>
          <div>
            {clients.map((c) => (
              <div
                className="w-80 h-25 bg-[rgba(118,154,159,0.2)] border-1 rounded-xl p-2 m-4 text-lg content-center"
                key={c}
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="h-screen rounded-lg relative col-span-3 bg-[rgba(255,255,255,0.05)]">
          <div className="p-5 text-center text-6xl h-10 rounded-xl mt-10">
            chat
          </div>

          {/* Messages list */}
          <div className="p-4 space-y-2 overflow-y-auto h-[75%]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-md ${
                  m.sender === "user"
                    ? "bg-blue-600 text-white ml-auto text-right"
                    : "bg-gray-200 text-black mr-auto text-left"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input + Send button */}
          <input
            className="absolute w-[calc(100%-90px)] h-12 bg-[rgba(148,162,164,0.10)] focus:outline-none bottom-0 mb-2 rounded-l-2xl ml-2 px-3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder=" Type a message..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="absolute w-20 h-12 bg-[rgba(3,12,47,0.92)] rounded-r-xl hover:bg-blue-700 bottom-0 right-0 mb-2"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

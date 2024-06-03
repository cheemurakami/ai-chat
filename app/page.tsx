"use client";

import { useState } from "react";
import Chat from "./components/Chat";
import Form from "./components/Form";
import { Message } from "./interface/message";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  return (
    <>
      <Chat messages={messages} />
      <Form messages={messages} setMessages={setMessages} />
    </>
  );
}

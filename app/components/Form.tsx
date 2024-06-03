"use client";

import { Box, Button, TextField } from "@mui/material";
import { getResponseText } from "../lib/actions";
import { Message } from "../interface/message";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

export default function Form({
  messages,
  setMessages,
}: {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const text = formData.get("question") as string;

    setMessages([...messages, { role: "user", content: text }]);
    setLoading(true);

    formEl.reset();
    getResponseText(text)
      .then((result) => {
        setMessages([
          ...messages,
          { role: "user", content: text },
          { role: "AI", content: result },
        ]);
      })
      .then(() => setLoading(false));
  }

  return (
    <Box
      sx={{
        margin: "24px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit} method="post">
        <Box
          sx={{
            margin: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <TextField
              id="outlined-basic"
              label="Ask me anything!"
              variant="outlined"
              name="question"
              sx={{ width: "80vw" }}
            />
          </Box>
          <Box>
            <Button
              type="submit"
              variant="outlined"
              sx={{ margin: 2, width: "20%", height: "3.5rem" }}
            >
              {loading ? "..." : "Ask"}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

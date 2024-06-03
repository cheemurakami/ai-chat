import { Box, Typography } from "@mui/material";
import { Message } from "../interface/message";

export default function Chat({ messages }: { messages: Message[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "24px",
        height: "80%",
        overflowY: "scroll",
      }}
    >
      {messages &&
        messages.map((message: Message) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    message.role === "AI" ? "flex-start" : "flex-end",
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    maxWidth: "50%",
                    overflow: "wrap",
                    margin: 2,
                    borderRadius: 1,
                    backgroundColor: "#B9CDDA",
                    p: 2,
                  }}
                >
                  <Typography>{message.content}</Typography>
                </Box>
              </Box>
            </>
          );
        })}
    </Box>
  );
}

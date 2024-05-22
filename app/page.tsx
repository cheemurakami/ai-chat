import { Box, Button, TextField } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          margin: "24px",
          height: "80%",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      ></Box>
      <Box
        sx={{
          margin: "24px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box>
          <TextField
            id="outlined-basic"
            label="Ask me anything!"
            variant="outlined"
            sx={{ width: "80vw" }}
          />
        </Box>
        <Box>
          <Button variant="outlined" sx={{ width: "20%", height: "3.5rem" }}>
            Ask
          </Button>
        </Box>
      </Box>
    </>
  );
}

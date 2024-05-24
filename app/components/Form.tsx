import { Box, Button, TextField } from "@mui/material";
import { getResponseText } from "../lib/actions";

export default function Form() {
  return (
    <Box
      sx={{
        margin: "24px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <form action={getResponseText} method="post">
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
            sx={{ width: "20%", height: "3.5rem" }}
          >
            Ask
          </Button>
        </Box>
      </form>
    </Box>
  );
}

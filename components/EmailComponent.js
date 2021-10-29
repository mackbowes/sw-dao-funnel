import EmailInput from "./EmailInput";
import SubmitButton from "./SubmitButton";
import { Box } from "@chakra-ui/react";

export default function Email(props) {
  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `space-between`,
        width: [`90vw`, `600px`],
        flexDirection: ["column", "row"],
        alignItems: `center`,
      }}
    >
      <EmailInput />
      <SubmitButton />
    </Box>
  );
}

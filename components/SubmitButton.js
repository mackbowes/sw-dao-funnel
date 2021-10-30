import { Box } from "@chakra-ui/react";

export default function SubmitButton(props) {
  return (
    <Box
      sx={{
        fontSize: [`3vh`, `1.5rem`],
        padding: [`.5ex .5em`, `1ex 1em`],
        border: `1px solid rgb(226, 232, 240)`,
        color: `white`,
        width: [`100%`, `400px`],
        borderRadius: `4px`,
        userSelect: `none`,
        display: `grid`,
        placeItems: `center`,
      }}
      _hover={{
        backgroundColor: `rgb(226, 232, 240)`,
        color: `black`,
        cursor: `pointer`,
      }}
      onClick={() => props.clickFunction()}
    >
      Join The Waitlist
    </Box>
  );
}

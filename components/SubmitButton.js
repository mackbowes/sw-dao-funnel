import { Box } from "@chakra-ui/react";

export default function SubmitButton(props) {
  return (
    <Box
      sx={{
        fontSize: [`3vh`, `1.5rem`],
        padding: [`.5ex .5em`, `1ex 1em`],
        border: `1px solid transparent`,
        color: `#0A0127`,
        width: [`100%`, `400px`],
        borderRadius: `4px`,
        userSelect: `none`,
        display: `grid`,
        placeItems: `center`,
        backgroundColor: `#B3DCFB`,
        transition: `all 0.25s linear`,
      }}
      _hover={{
        backgroundColor: `#00AAEC`,
        color: `#0A0127`,
        cursor: `pointer`,
      }}
      onClick={() => props.clickFunction()}
    >
      Join The Waitlist
    </Box>
  );
}

import { Box, Text } from "@chakra-ui/react";

export default function GridComponent(props) {
  return (
    <Box
      sx={{
        display: `flex`,
        border: `1px solid rgba(255,255,255,0.35)`,
        padding: `1rem`,
        alignItems: `center`,
      }}
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{ maxWidth: `25%`, marginRight: `1rem` }}
      />
      <Text
        sx={{
          fontSize: [`1rem`, `2.4vh`],
          color: `white`,
        }}
      >
        {props.label}
      </Text>
    </Box>
  );
}

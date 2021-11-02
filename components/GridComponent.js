import { Box, Text } from "@chakra-ui/react";

export default function GridComponent(props) {
  return (
    <Box
      sx={{
        display: `flex`,
        border: `1px solid #212274`,
        padding: `1rem`,
        alignItems: `center`,
        borderRadius: `8px`,
      }}
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{ maxWidth: `25%`, marginRight: `1rem` }}
      />
      <Text
        sx={{
          fontFamily: `futura-pt`,
          fontSize: [`1.34rem`, `2.4vh`],
          color: `white`,
        }}
      >
        {props.label}
      </Text>
    </Box>
  );
}

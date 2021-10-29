import { Input } from "@chakra-ui/react";

export default function EmailInput(props) {
  return (
    <Input
      placeholder="email address"
      sx={{
        fontSize: [`1rem`, `1.5rem`],
        padding: [`.5ex .5em`, `1ex 1em`],
        height: `auto`,
        color: `white`,
        margin: [`1rem`, `0`],
        marginRight: [`1rem`, `2rem`],
      }}
    />
  );
}

import { Input } from "@chakra-ui/react";

export default function EmailInput(props) {
  const val = props.val;
  const setVal = props.setVal;

  return (
    <Input
      placeholder="email address"
      type="email"
      sx={{
        fontSize: [`1rem`, `1.5rem`],
        padding: [`.5ex .5em`, `1ex 1em`],
        height: `auto`,
        color: `white`,
        margin: [`1rem`, `0`],
        marginRight: [`1rem`, `2rem`],
      }}
      value={val}
      onChange={(d) => setVal(d)}
    />
  );
}

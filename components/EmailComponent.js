import { useEffect, useState } from "react";
import EmailInput from "./EmailInput";
import SubmitButton from "./SubmitButton";
import { Box, Text } from "@chakra-ui/react";
import TagManager from "react-gtm-module";

const emailButtonArgs = {
  dataLayer: {
    event: "email-button-click",
  },
};

export default function Email(props) {
  const val = props.val;
  const setVal = props.setVal;

  const [serverResponse, setServerResponse] = useState("");

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async function addUser() {
    TagManager.dataLayer(emailButtonArgs);
    if (!validateEmail(val)) {
      setServerResponse("Invalid Email");
      setTimeout(() => {
        setServerResponse("");
      }, 5000);
      return null;
    }

    const bodyJson = JSON.stringify({
      email: val,
    });
    const headers = new Headers();
    const req = {
      method: "POST",
      headers,
      body: bodyJson,
    };
    const response = await fetch("/api/subscribe", req);
    const unJsond = await response.json();
    if (unJsond?.id?.length > 0) {
      setServerResponse(
        "Waitlist position secured. Check your email soon to confirm."
      );
      setTimeout(() => {
        setServerResponse("");
      }, 5000);
    }
    if (unJsond?.error) {
      const text = await JSON.parse(unJsond.error.response.text);
      setServerResponse(`Something went wrong: ${text.title}`);
    }
  }

  return (
    <>
      <Box
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          width: [`90vw`, `780px`],
          flexDirection: ["column", "row"],
          alignItems: `center`,
        }}
      >
        <EmailInput val={val} setVal={(d) => setVal(d)} />
        <SubmitButton clickFunction={() => addUser()} />
      </Box>
      {serverResponse.length > 0 && (
        <Text
          sx={{
            color: `white`,
            fontSize: `1.2rem`,
            padding: `1em`,
            maxWidth: [`90vw`, `60vw`],
            textAlign: `center`,
          }}
          onClick={() => setTimeout(() => setServerResponse(""), 5000)}
        >
          {serverResponse}
        </Text>
      )}
    </>
  );
}

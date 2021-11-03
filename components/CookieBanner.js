import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function CookieBanner(props) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  function enableCookies() {
    props.enableCookies(true);
    setIsBannerVisible(false);
  }

  return (
    <>
      {isBannerVisible && (
        <Box
          sx={{
            display: `flex`,
            width: `100vw`,
            position: `fixed`,
            bottom: `0`,
            backgroundColor: `black`,
            color: `white`,
            fontFamily: `futura-pt, sans-serif`,
            zIndex: `1`,
            padding: `1rem`,
          }}
        >
          <Box sx={{ width: `50%` }}>
            <Text>
              We use cookies to track interactions on this page to make sure
              we&apos;re getting the word out about our DAO and dApp
              efficiently. Please click &apos;allow&apos; to enable tracking so
              we can help more people access the future of DeFi. We store a
              limited amount of information to protect your privacy. The data we
              collect is: which page was viewed, how long you spend on this
              page, how far down you scroll, which buttons you click, which
              website you&apos;re visiting from, and your http request times and
              locations. Note: tracking will be disabled by default unless you
              accept.
            </Text>
          </Box>
          <Box sx={{ width: `50%`, display: `grid`, placeItems: `center` }}>
            <Box
              sx={{
                display: `flex`,
                width: `80%`,
                justifyContent: `space-evenly`,
              }}
            >
              <Button
                sx={{ backgroundColor: `white`, color: `black` }}
                onClick={() => enableCookies()}
              >
                Enable
              </Button>
              <Button
                sx={{ backgroundColor: `white`, color: `black` }}
                onClick={() => setIsBannerVisible(false)}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

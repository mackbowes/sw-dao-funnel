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
        <>
          <Box
            sx={{
              position: `fixed`,
              top: `0`,
              left: `0`,
              width: `100%`,
              height: `100%`,
              zIndex: `1`,
              backdropFilter: `blur(6px)`,
            }}
          ></Box>
          <Box
            sx={{
              display: `flex`,
              width: `100vw`,
              flexDirection: [`column`, `row`],
              position: `fixed`,
              bottom: [`0`, ``],
              transform: [`none`, `none`],
              backgroundColor: `black`,
              color: `white`,
              fontFamily: `futura-pt, sans-serif`,
              zIndex: `1`,
              padding: `1rem`,
              alignItems: `center`,
            }}
          >
            <Box sx={{ width: [`100%`, `50%`], padding: [`.5rem`, 0] }}>
              <Text>
                Please accept cookies to explore the future of DeFi. Accepting
                cookies helps us share the future with more people, making it
                better for everyone. Note: tracking will be disabled by default
                unless you accept.
              </Text>
            </Box>
            <Box
              sx={{
                width: [`100%`, `50%`],
                display: `grid`,
                placeItems: `center`,
                padding: [`1rem`, `0`],
              }}
            >
              <Box
                sx={{
                  display: `flex`,
                  width: `80%`,
                  justifyContent: `space-evenly`,
                }}
              >
                <Button
                  sx={{ backgroundColor: `white`, color: `black` }}
                  onClick={() => setIsBannerVisible(false)}
                >
                  Close
                </Button>
                <Button
                  sx={{ backgroundColor: `white`, color: `black` }}
                  onClick={() => enableCookies()}
                >
                  Enable
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

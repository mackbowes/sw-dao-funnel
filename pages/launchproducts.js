import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Countdown from "../components/Countdown";
import EmailComponent from "../components/EmailComponent";
import GridComponent from "../components/GridComponent";
import DiscordLogo from "../components/DiscordLogo.js";
import TwitterLogo from "../components/TwitterLogo.js";
import TagManager from "react-gtm-module";

import CookieBanner from "../components/CookieBanner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const handleEmailChange = (data) => {
    setEmail(data.target.value);
  };

  const value = Math.random();

  useEffect(() => {
    if (cookiesAccepted) {
      TagManager.initialize({ gtmId: "GTM-5XL5K7V" });
    }
  }, [cookiesAccepted]);

  return (
    <Box
      sx={{
        width: `100%`,
        minHeight: `100vh`,
        backgroundColor: `#0A0127`,
        position: `relative`,
        overflowX: `hidden`,
      }}
    >
      <CookieBanner enableCookies={() => setCookiesAccepted(true)} />
      <Box
        sx={{
          position: `absolute`,
          width: `100vw`,
          height: `50vh`,
          left: `0`,
          zIndex: `0`,
          overflowX: `hidden`,
          overflowY: `hidden`,
        }}
      >
        <img src="/images/bg-01.png" alt="" style={{ position: `absolute` }} />
      </Box>
      <Box
        sx={{
          position: `relative`,
          width: `100vw`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          justifyContent: `flex-start`,
          margin: `0 auto`,
          maxHeight: `100vh`,
          overflowY: `scroll`,
          background: `transparent`,
          scrollbarWidth: `none`,
        }}
        css={{
          "&::-webkit-scrollbar": {
            display: `none`,
          },
        }}
      >
        <Box sx={{ minHeight: `96px` }}></Box>
        <Heading
          sx={{
            fontFamily: `futura-pt`,
            fontWeight: `700`,
            color: `white`,
            fontSize: [`10vw`, `12.5vh`],
            textAlign: `center`,
            maxWidth: `13ch`,
          }}
        >
          SW Dao Launch Products
        </Heading>
        <Box sx={{ minHeight: [`7vh`, `96px`] }}></Box>
        <Text
          sx={{
            maxWidth: `70ch`,
            margin: `1rem 0`,
            padding: `1rem`,
            fontSize: `1.25rem`,
            backgroundColor: `rgba(0,0,0,0.6)`,
          }}
        >
          This page offers an overview of all products offered by SW Dao at
          launch on December 5, 2021.
        </Text>
        <Box sx={{ minHeight: `36px` }}></Box>
        <Heading as="h2" id="DPIMomentum" sx={{ margin: `1rem 0` }}>
          DPI Momentum
        </Heading>
        <Box sx={{ width: `80vw` }}>
          <video
            controls
            style={{
              border: `2px solid #212274`,
              borderRadius: `4px`,
              boxShadow: `0px 0px 1rem 1rem rgba(0,0,0,0.2)`,
              width: `80vw`,
              maxWidth: `1280px`,
              margin: `0 auto`,
            }}
          >
            <source src="/videos/SW_DAO_DPI_ETHEREUM.mp4" type="video/mp4" />
          </video>
        </Box>
        <Box sx={{ minHeight: `36px` }}></Box>
        <Heading as="h2" id="YieldFarming" sx={{ margin: `1rem 0` }}>
          Yield Farming
        </Heading>
        <Box sx={{ width: `80vw` }}>
          <video
            controls
            style={{
              border: `2px solid #212274`,
              borderRadius: `4px`,
              boxShadow: `0px 0px 1rem 1rem rgba(0,0,0,0.2)`,
              width: `80vw`,
              maxWidth: `1280px`,
              margin: `0 auto`,
            }}
          >
            <source src="/videos/SW_DAO_YIELD_FARMING.mp4" type="video/mp4" />
          </video>
        </Box>
        <Box sx={{ minHeight: `36px` }}></Box>
        <Heading as="h2" id="LongShortAlpha" sx={{ margin: `1rem 0` }}>
          Long Short Alpha
        </Heading>
        <Box sx={{ width: `80vw` }}>
          <video
            controls
            style={{
              border: `2px solid #212274`,
              borderRadius: `4px`,
              boxShadow: `0px 0px 1rem 1rem rgba(0,0,0,0.2)`,
              width: `80vw`,
              maxWidth: `1280px`,
              margin: `0 auto`,
            }}
          >
            <source src="/videos/SW_DAO_LONG_SHORT.mp4" type="video/mp4" />
          </video>
        </Box>
        <Box sx={{ minHeight: [`7vh`, `96px`] }}></Box>
        <Heading
          sx={{
            fontFamily: `futura-pt`,
            color: `white`,
            fontSize: [`4vh`, `5vh`],
            fontWeight: `200`,
            textAlign: `center`,
          }}
        >
          Public dApp Access on December 1st
        </Heading>
        <Box sx={{ minHeight: [`7vh`, `96px`] }}></Box>
        <Countdown date={"December 1, 2021 12:00:00"} />
        <Box sx={{ minHeight: [`18px`, `96px`] }}></Box>
        <EmailComponent val={email} setVal={(d) => handleEmailChange(d)} />
        <Box sx={{ minHeight: [`7vh`, `96px`] }}></Box>
        <Text sx={{ color: `white`, textAlign: `center` }}>
          Join the Community
        </Text>
        <Box
          sx={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-around`,
            margin: `2.5vh 0`,
          }}
        >
          <Box
            sx={{
              transition: `all 0.5s linear`,
              margin: `1rem`,
            }}
            _hover={{
              cursor: `pointer`,
              transform: `translateY(-8px)`,
            }}
          >
            <a href="https://discord.com/invite/Wt3NcfJ2Em">
              <DiscordLogo />
            </a>
          </Box>
          <Box
            sx={{
              transition: `all 0.5s linear`,
              margin: `1rem`,
            }}
            _hover={{
              cursor: `pointer`,
              transform: `translateY(-8px)`,
            }}
          >
            <a href="https://twitter.com/sw__dao">
              <TwitterLogo />
            </a>
          </Box>
        </Box>
        <Box sx={{ minHeight: `96px` }}></Box>
      </Box>
    </Box>
  );
}

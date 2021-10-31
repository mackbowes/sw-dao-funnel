import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Countdown from "../components/Countdown";
import EmailComponent from "../components/EmailComponent";
import GridComponent from "../components/GridComponent";
import DiscordLogo from "../components/DiscordLogo.js";
import TwitterLogo from "../components/TwitterLogo.js";

export default function Home() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (data) => {
    setEmail(data.target.value);
  };

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
          marginTop: `1rem`,
          background: `transparent`,
          scrollbarWidth: `none`,
          padding: `3vh 0`,
        }}
        css={{
          "&::-webkit-scrollbar": {
            display: `none`,
          },
        }}
      >
        <Box sx={{ minHeight: `5vh` }}></Box>
        <Heading
          sx={{
            fontFamily: `Work Sans`,
            color: `white`,
            fontSize: [`10vw`, `12.5vh`],
            textAlign: `center`,
            maxWidth: `13ch`,
          }}
        >
          The Future of DeFi is Here.
        </Heading>
        <Box sx={{ minHeight: `5vh` }}></Box>
        <Heading
          sx={{
            fontFamily: `Work Sans`,
            color: `white`,
            fontSize: [`5vw`, `5vh`],
            fontWeight: `200`,
          }}
        >
          Introducing
        </Heading>
        <Box sx={{ minHeight: `5vh` }}></Box>
        <img src="/images/swdao.png" alt="sw dao" />
        <Text
          sx={{
            textAlign: `center`,
            fontSize: [`1rem`, `1.5rem`],
            maxWidth: [`90vw`, `40vw`],
            margin: [`1rem`, `0`],
          }}
        >
          Investor grade financial tools built to help you take advantage of the
          emerging DeFi economoy and grow your wealth.
        </Text>
        <Box sx={{ minHeight: `5vh` }}></Box>
        <Text
          sx={{
            textAlign: `center`,
            fontSize: [`.9rem`, `1.2rem`],
            maxWidth: [`90vw`, `40vw`],
            margin: [`1rem`, `0`],
          }}
        >
          Discover the SW Dao Dapp in 3 Minutes:
        </Text>
        <Box sx={{ minHeight: `2.5vh` }}></Box>
        <video
          controls
          style={{
            border: `2px solid white`,
            borderRadius: `4px`,
            boxShadow: `0px 0px 1rem 1rem rgba(0,0,0,0.5)`,
            maxWidth: `80vw`,
          }}
        >
          <source src="/videos/SW_DAO_Final.mp4" type="video/mp4" />
        </video>
        <Box sx={{ minHeight: `5vh` }}></Box>
        <Heading
          sx={{
            fontFamily: `Work Sans`,
            color: `white`,
            fontSize: [`4vh`, `5vh`],
            fontWeight: `200`,
            textAlign: `center`,
          }}
        >
          Public dApp Access on December 1st
        </Heading>
        <Box sx={{ minHeight: `5vh` }}></Box>
        <Countdown date={"December 1, 2021 12:00:00"} />
        <Box sx={{ minHeight: `5vh` }}></Box>
        <EmailComponent val={email} setVal={(d) => handleEmailChange(d)} />
        <Box sx={{ minHeight: `5vh` }}></Box>
        <Heading
          sx={{
            color: `white`,
            fontSize: `2rem`,
            padding: [`1rem`, 0],
            textAlign: [`center`],
          }}
        >
          The future of Defi is accessible to you.
        </Heading>
        <Box sx={{ minHeight: `5vh` }}></Box>
        <Box
          sx={{
            display: `grid`,
            gridTemplateColumns: [`1fr`, `4fr 5fr`],
            columnGap: `1rem`,
            rowGap: `1rem`,
            maxWidth: [`90vw`, `60vw`],
            margin: `0 auto`,
            fontFamily: `'Work Sans', sans-serif`,
          }}
        >
          <Box
            sx={{
              backgroundColor: `#212274`,
              color: `white`,
              padding: `1.3rem`,
              fontSize: `2.1rem`,
              fontWeight: `500`,
              lineHeight: `1.5`,
              borderRadius: `.5rem`,
            }}
          >
            SW Dao streamlines all the complexity of DeFi and creates a
            user-friendly experience.
          </Box>
          <Box
            sx={{
              backgroundColor: `#1d112f`,
              color: `white`,
              fontWeight: `300`,
              fontSize: `1.25rem`,
              padding: `1.67rem`,
              lineHeight: `1.65`,
              borderRadius: `.5rem`,
            }}
          >
            SW Dao offers a public, on chain mutual fund that leverages
            world-class machine-learning and artificial intelligence to monitor
            the DeFi market 24/7 and discover investement opportunities. Our
            team of experienced, multidisciplinary traders assess these
            opportunities and leverage their experience to make profitable
            moves.
          </Box>
        </Box>
        <Box sx={{ minHeight: `5vh` }}></Box>
        <Box
          sx={{
            display: `grid`,
            gridTemplateColumns: [`1fr`, `1fr 1fr`],
            columnGap: `1rem`,
            rowGap: `1rem`,
            maxWidth: [`90vw`, `60vw`],
          }}
        >
          <GridComponent
            image={"/images/Options-ETH.png"}
            alt={"Trade Eth Options"}
            label={"Automated DeFi Gains"}
          />
          <GridComponent
            image={"/images/Yield-Farming.png"}
            alt={"Invest in Yield Farming"}
            label={"Experienced and profitable Traders"}
          />
          <GridComponent
            image={"/images/Smart-Beta-Portfolio.png"}
            alt={"Collect Smart Beta"}
            label={"Powered by ML & AI"}
          />
          <GridComponent
            image={"/images/Social-Token-Index.png"}
            alt={"Get exposure to top social-utility tokens"}
            label={"Public & On Chain"}
          />
        </Box>
        <Box sx={{ minHeight: `5vh` }}></Box>
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
        <Box sx={{ minHeight: `5vh` }}></Box>
        <EmailComponent val={email} setVal={(d) => handleEmailChange(d)} />
        <Box sx={{ minHeight: `5vh` }}></Box>
      </Box>
    </Box>
  );
}

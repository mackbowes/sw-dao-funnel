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
        <Box sx={{ minHeight: `1rem` }}></Box>
        <Box
          sx={{
            display: `flex`,
            flexDirection: `column`,
            width: [`90vw`, `1154px`],
            alignItems: `flex-start`,
          }}
        >
          <Heading
            sx={{
              fontFamily: `futura-pt`,
              fontWeight: `700`,
              color: `white`,
              fontSize: [`10vw`, `12.5vh`],
              textAlign: `center`,
            }}
          >
            SW DAO Glossary
          </Heading>
          <Text
            sx={{
              maxWidth: `70ch`,
              margin: `1rem 0`,
              padding: `1rem`,
              fontSize: `1.25rem`,
              backgroundColor: `rgba(0,0,0,0.6)`,
            }}
          >
            We understand that our product is complex.
            <br /> The reason we created our platform was to abstract away the
            complexity of investing into DeFi protocols - we wanted to
            democratize the process and ensure every investor has access to
            these protocols regardless of finance or technology education.
            <br />
            <br />
            However, we also understand that investors have a responsibility to
            themselves to understand exactly where their money is going when
            they invest, and why they would make that investment. To help people
            interested in accessing DeFi through our platform understand the
            DeFi ecosystem better, and exactly what we offer, we've prepared
            this glossary to explain some of the foundational and novel concepts
            in further depth.
          </Text>
          <Heading as="h2" id="DefiRoboadvisor">
            DeFi Roboadvisor
          </Heading>
          <Text
            sx={{
              maxWidth: `70ch`,
              margin: `1rem 0`,
              padding: `1rem`,
              fontSize: `1.25rem`,
              backgroundColor: `rgba(0,0,0,0.6)`,
            }}
          >
            The term "DeFi Roboadvisor" is a combination of two pre-existing
            concepts: DeFi, and Roboadvisors.
            <br />
            We'll start by familiarizing ourselves with the idea of a
            Roboadvisor as that idea comes from the traditional finance world.
            <br />
            <br />
            Roboadvisors are an emerging, consumer facing finance technology.
            <br />
            Historically, access to financial instruments like stocks, bonds,
            options, ETFs, and so on were recommended to retail investors (
            <strong>'retail investor'</strong> meaning a literal person and not
            a corporation, trust, or other institutional actor) by financial
            advisors.
            <br />
            This made a situation where access to the best financial advice was
            limited by the personal bandwidth of the best specific, individual
            financial advisors - most people just didn't get good financial
            advice, and were blocked from participating in financial markets.
            <br />
            <br />
            Roboadvisors solve that problem by leveraging two new technologies
            to connect retail investors with good financial advice: the internet
            and AI.
            <br />
            There are a few different Roboadvisor products available to
            investors with a variety of specific implementations, but the common
            thread is that a combination of quantitative analysts and AI scan
            and analyze financial markets to make recommendations for consumers
            that are then sent directly to retail investors over the internet to
            either act on at the retail investor's individual discretion or
            automatically.
            <br />
            <br />
            In summary, Roboadvisors work to democratize access to good
            financial advice for many people and abstract away the complexities
            of investing to a small group of expert analysts and engineers.
            <br />
            <br />
            Next, we'll discuss DeFi.
            <br />
            <br />
            DeFi is short for <strong>Decentralized Finance</strong>, and it's a
            newer emerging technology built on top of cryptocurrencies like
            Ethereum. The term has the qualifier 'Decentralized' because there's
            no one centralized exchange or governing body restricting who can or
            can not engage with those specific financial markets, or what type
            of protocols can be offered to retail investors. This is a{" "}
            <em>very new field</em>, and because there is no governing body
            approving financial instruments, many new protocols launch each
            month with their own profit and risk profiles.
            <br />
            <br />
            This starkly contrasts the Traditional Finance world (sometimes
            shortened to TradFi) where all buy and sell orders are routed
            through a small handful of centralized exchanges.
            <br />
            <br /> Some common DeFi protocols that we'll talk about later
            include Liquidity Providing, Yield Farming, and Predictive Markets.
            <br />
            <br />
            Combining the concepts, basically a DeFi Roboadvisor is a method for
            retail investors to get equal access to professional financial
            advice on DeFi products.
          </Text>
          <Heading as="h2" id="QuantitativeAnalyst">
            Quantitative Analysts
          </Heading>
          <Text
            sx={{
              maxWidth: `70ch`,
              margin: `1rem 0`,
              padding: `1rem`,
              fontSize: `1.25rem`,
              backgroundColor: `rgba(0,0,0,0.6)`,
            }}
          >
            Quantitative analysts are specialized workers who use mathematics
            and statistics to analyze financial markets and make predictions
            about it's behaviour to earn a profit by timing investment entries
            and exits. <br />
            <br />
            Most of our team has work history as quantitative analysts at
            traditional financial institutions with strong track records.
            <br />
            <br />
            We've taken our experience with which statistical methods work best
            and developed a custom AI to alert us when new opportunities that
            match our models appear in the DeFi Market, analyze the opportunity
            ourselves, then pass that information to our platform protocols for
            execution.
          </Text>
          <Heading as="h2" id="MachineLearning">
            Machine Learning (Artificial Intelligence)
          </Heading>
          <Text
            sx={{
              maxWidth: `70ch`,
              margin: `1rem 0`,
              padding: `1rem`,
              fontSize: `1.25rem`,
              backgroundColor: `rgba(0,0,0,0.6)`,
            }}
          >
            Machine Learning (sometimes called Artificial Intelligence or AI) is
            an emerging field in computer science that uses mathematics and
            statistics to create self-improving and generative algorithms based
            on input data. AI is commonly applied to large data sets like user
            interactions, video or audio streams, or financial data to generate
            new information like psychographic profiles, instructions for
            self-driving cars, and investment opportunities.
            <br />
            <br />
            It's a pretty complex field so we won't get into the exact
            mechanisms of how AI works, but we can explain what our AI does. We
            built a new AI to analyze data we collect from the DeFi marketplace,
            apply statistical analysis to the data in much the same way an
            expert quantitative analyst would, and alert our team about new
            opportunities for profit. <br />
            <br />
            Our AI is pretty good, but it's still basically just a program and
            isn't right 100% of the time. We use it to take the heavy lifting
            out of scanning the entire marketplace (that grows and changes every
            day), and gives our team of quantitative analysts a list of "top
            picks" to manually analyze before making investment decisions.
          </Text>
          <Heading as="h2" id="MachineLearning">
            Machine Learning (Artificial Intelligence)
          </Heading>
          <Text
            sx={{
              maxWidth: `70ch`,
              margin: `1rem 0`,
              padding: `1rem`,
              fontSize: `1.25rem`,
              backgroundColor: `rgba(0,0,0,0.6)`,
            }}
          >
            Machine Learning (sometimes called Artificial Intelligence or AI) is
            an emerging field in computer science that uses mathematics and
            statistics to create self-improving and generative algorithms based
            on input data. AI is commonly applied to large data sets like user
            interactions, video or audio streams, or financial data to generate
            new information like psychographic profiles, instructions for
            self-driving cars, and investment opportunities.
            <br />
            <br />
            It's a pretty complex field so we won't get into the exact
            mechanisms of how AI works, but we can explain what our AI does. We
            built a new AI to analyze data we collect from the DeFi marketplace,
            apply statistical analysis to the data in much the same way an
            expert quantitative analyst would, and alert our team about new
            opportunities for profit. <br />
            <br />
            Our AI is pretty good, but it's still basically just a program and
            isn't right 100% of the time. We use it to take the heavy lifting
            out of scanning the entire marketplace (that grows and changes every
            day), and gives our team of quantitative analysts a list of "top
            picks" to manually analyze before making investment decisions.
          </Text>
        </Box>
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
        <Box sx={{ minHeight: [`7vh`, `64px`] }}></Box>
        <Countdown date={"December 1, 2021 12:00:00"} />
        <Box sx={{ minHeight: [`18px`, `96px`] }}></Box>
        <EmailComponent val={email} setVal={(d) => handleEmailChange(d)} />
        <Box sx={{ minHeight: `96px` }}></Box>
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

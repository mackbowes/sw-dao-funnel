import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      sx={{
        width: `100vw`,
        minHeight: `100vh`,
        backgroundColor: `#0A0127`,
        position: `relative`,
      }}
    >
      <Box
        sx={{
          position: `absolute`,
          width: `100vw`,
          height: `auto`,
          left: `0`,
          zIndex: `0`,
        }}
      >
        <img src="/images/bg-01.png" alt="" style={{ position: `absolute` }} />
      </Box>
      <Box
        sx={{
          position: `relative`,
          width: [`90vw`, `80vw`],
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          justifyContent: `flex-start`,
          margin: `0 auto`,
        }}
      >
        <Box sx={{ minHeight: `10vh` }}></Box>
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
        <Box sx={{ minHeight: `10vh` }}></Box>
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
        <Box sx={{ minHeight: `10vh` }}></Box>
        <img src="/images/swdao.png" alt="sw dao" />
        <Text
          sx={{
            textAlign: `center`,
            fontSize: `1.5rem`,
            maxWidth: [`90vw`, `40vw`],
            marginTop: `1rem`,
          }}
        >
          Investor grade financial tools built to help you take advantage of the
          emerging DeFi economoy and grow your wealth.
        </Text>
        <Box sx={{ minHeight: `10vh` }}></Box>
      </Box>
    </Box>
  );
}

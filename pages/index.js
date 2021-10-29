import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
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
          height: `auto`,
          left: `0`,
          zIndex: `0`,
          overflowX: `hidden`,
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
            fontSize: `1.5rem`,
            maxWidth: [`90vw`, `40vw`],
          }}
        >
          Investor grade financial tools built to help you take advantage of the
          emerging DeFi economoy and grow your wealth.
        </Text>
        <Box sx={{ minHeight: `10vh` }}></Box>
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
            fontSize: [`5vw`, `5vh`],
            fontWeight: `200`,
          }}
        >
          Public Access on December 1st
        </Heading>
        <Box sx={{ minHeight: `5vh` }}></Box>
        {/* Countdown Component */}
        <Box sx={{ minHeight: `5vh` }}></Box>
        {/* Email Component */}
        <Box sx={{ minHeight: `5vh` }}></Box>
        <Heading sx={{ color: `white`, fontSize: `2rem` }}>
          The future of Defi is accessible to you.
        </Heading>
        <Box sx={{ minHeight: `5vh` }}></Box>
        <Box
          sx={{
            display: `grid`,
            gridTemplateColumns: [`1fr`, `4fr 5fr`],
            columnGap: `1rem`,
            maxWidth: [`90vw`, `60vw`],
            margin: `0 auto`,
            fontFamily: `'Work Sans', sans-serif`
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
              borderRadius: `.5rem`
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
              borderRadius: `.5rem`
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
      </Box>
    </Box>
  );
}

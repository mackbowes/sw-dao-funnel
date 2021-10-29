import { useEffect, useState } from "react";
import { Heading, Text, Box, HStack } from "@chakra-ui/react";

export default function Countdown(props) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function setTimes(ms) {
    const DAYS = Math.floor(ms / (1000 * 60 * 60 * 24));
    const HOURS = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const MINUTES = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const SECONDS = Math.floor((ms % (1000 * 60)) / 1000);
    setDays(DAYS);
    setHours(HOURS);
    setMinutes(MINUTES);
    setSeconds(SECONDS);
  }

  useEffect(() => {
    const endDate = new Date(props.date);
    const update = setInterval(() => {
      const remainingTime = endDate - new Date();
      setTimes(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(update);
      }
    }, 1000);
  }, [props.date]);

  return (
    <HStack
      spacing="20"
      sx={{
        color: `white`,
      }}
    >
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Heading sx={{ fontSize: `4rem` }}>{days}</Heading>
        <Text>Days</Text>
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Heading sx={{ fontSize: `4rem` }}>{hours}</Heading>
        <Text>Hours</Text>
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Heading sx={{ fontSize: `4rem` }}>{minutes}</Heading>
        <Text>Minutes</Text>
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Heading sx={{ fontSize: `4rem` }}>{seconds}</Heading>
        <Text>Seconds</Text>
      </Box>
    </HStack>
  );
}

import { useEffect, useState } from "react";
import { Heading, Text, Box, HStack } from "@chakra-ui/react";

export default function Countdown(props) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function addZeros(number) {
    if (number <= 9) {
      return `0${number}`;
    }
    return number;
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
    return () => {
      clearInterval(update);
    };
    function setTimes(ms) {
      const DAYS = addZeros(Math.floor(ms / (1000 * 60 * 60 * 24)));
      const HOURS = addZeros(
        Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const MINUTES = addZeros(
        Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
      );
      const SECONDS = addZeros(Math.floor((ms % (1000 * 60)) / 1000));
      setDays(DAYS);
      setHours(HOURS);
      setMinutes(MINUTES);
      setSeconds(SECONDS);
    }
  }, [props.date]);

  return (
    <HStack
      sx={{
        color: `white`,
        width: [`90vw`, `780px`],
        justifyContent: `space-between`,
      }}
    >
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Heading sx={{ fontSize: [`3rem`, `80px`] }}>{days}</Heading>
        <Text>Days</Text>
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Heading sx={{ fontSize: [`3rem`, `80px`] }}>{hours}</Heading>
        <Text>Hours</Text>
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Heading sx={{ fontSize: [`3rem`, `80px`] }}>{minutes}</Heading>
        <Text>Minutes</Text>
      </Box>
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <Heading sx={{ fontSize: [`3rem`, `80px`] }}>{seconds}</Heading>
        <Text>Seconds</Text>
      </Box>
    </HStack>
  );
}

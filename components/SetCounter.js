import React, { useState, useEffect, useRef } from "react";
import { Button, Text, Box, VStack, Spacer, StackDivider, Container} from '@chakra-ui/react'

const SetCounter = () => {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  const isFirstUpdate = useRef(true);

  useEffect(() => {
    if (isFirstUpdate.current) {
      const restoreStartTime = localStorage.getItem('startTime');
      if(restoreStartTime) setStartTime(parseInt(restoreStartTime))
      const restoreCount = localStorage.getItem('count');
      if(restoreCount) setCount(parseInt(restoreCount))
      const restoreRunning = localStorage.getItem('running');
      if(restoreRunning) setRunning(JSON.parse(restoreRunning))
      isFirstUpdate.current = false;
    }

    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(new Date().getTime() - startTime);
      }, 100);
    }

    return () => { if(interval) clearInterval(interval); }
  }, [running, startTime]);

  const handleStartRestPeriod = event => {
    event.preventDefault();

    const myStartTime = new Date().getTime()
    const newCount = count + 1

    setStartTime(myStartTime)
    setCount(newCount);
    setRunning(true);

    localStorage.setItem('count', newCount);
    localStorage.setItem('startTime', myStartTime);
    localStorage.setItem('running', true);
  };

  const handleEndRestPeriod = event => {
    event.preventDefault();

    setRunning(false);
    setTime(0);
    setStartTime(0);

    localStorage.setItem('running', false);
    localStorage.setItem('startTime', 0);
  };

  const handleReset = event => {
    event.preventDefault();

    setRunning(false);
    setTime(0);
    setCount(0);

    localStorage.setItem('running', false);
    localStorage.setItem('count', 0);
  };

  function mSecToTime(msecs){
    return ("0" + Math.floor((time / 60000) % 60)).slice(-2) + ":" + ("0" + Math.floor((msecs / 1000) % 60)).slice(-2)
  }

  function renderButton(){
    if(running){
      return <Button m={10} onClick={handleEndRestPeriod}>Done resting</Button>
    }
    else {
      return <Button m={10} onClick={handleStartRestPeriod}>Completed set</Button>
    }
  }

  return (
    <Box mt="20%">
      <VStack
        divider={<StackDivider borderColor='white' />}
        spacing={4}
        align='stretch'
      >
        <Container centerContent><Text fontSize='4xl'>Sets completed: {count}</Text></Container>
        <Container centerContent><Text fontSize='4xl' minWidth={100}>{mSecToTime(time)}</Text></Container>
        {renderButton()}
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Button m={10} color='red' onClick={handleReset}>Reset</Button>
      </VStack>
    </Box>
  );
};

export default SetCounter;

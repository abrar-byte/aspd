import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(60000);
  

  const tokenTTL = 10;
  // let difference;
  const now = dayjs().second();
  // const nowFormat = dayjs().format("hh:mm:ss");
  const addTime = dayjs().add(tokenTTL, "minute");
  const timeTo = addTime.subtract(now).minute();

  
  
  useEffect(() => {
      // const actualTime = new Date();
      // const target = new Date(
      //   actualTime.setMinutes(actualTime.getMinutes() + tokenTTL)
      // );
  
      const interval = setInterval(() => {
        //   console.log(now);
        //   console.log("TT", timeTo);
        //   console.log("add", addTime.format("mm:ss"));
        //   console.log("nf", dayjs().second());
        setTimer(timer-1000)
        console.log('jalan?');
        //   setMinutes(dayjs().minute());
        //   setSeconds(dayjs().second());
          // const now = new Date();
          // difference = target.getTime() - now.getTime();
          // let m: string | number = Math.floor(
          //   (difference % (1000 * 60 * 60)) / (1000 * 60)
          // );
          // m = m < 10 ? "0" + m : m;
          // setMinutes(m as number);
          // let s: string | number = Math.floor((difference % (1000 * 60)) / 1000);
          // s = s < 10 ? "0" + s : s;
          // setSeconds(s as number);
          // if (difference === 0) {
          //   isValid(false);
          // }
      }, 1000);
      return () => clearInterval(interval);
  }, [timer]);
  
  console.log(timeTo);
  return (
      <p className="Timer">
          <span>{dayjs(timer).hour()}</span>
          <span className="divider">:</span>

          <span>{dayjs(timer).minute()}</span>
          <span className="divider">:</span>

          <span>{dayjs(timer).second()}</span>

          {/* <span className="minutes">{minutes}</span>
          <span className="divider">:</span>
          <span className="seconds">{seconds}</span> */}
      </p>
  );
}

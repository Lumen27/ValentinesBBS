import { Column, Row } from "../../../../components/utils";
import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const Wrapper = styled(Column)`
  flex-grow: 1;
  gap: 32px;
`;

const TimerWrapper = styled(Row)`
  gap: 8px;
  font-weight: bold;
  span {
    font-size: 24px;
  }
`;

const CountdownTimer: FC = () => {
  // thumbs up floating gifs
  const targetDate = dayjs.tz("2026-02-14 00:00:00", "Asia/Tokyo");
  const [timeLeft, setTimeLeft] = useState(targetDate.diff(dayjs()));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs.tz(dayjs(), "Asia/Tokyo");
      const target = dayjs.tz("2026-02-14 00:00:00", "Asia/Tokyo");

      const diff = target.diff(now);
      setTimeLeft(diff > 0 ? diff : 0);

      if (diff <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const dur = dayjs.duration(timeLeft);

  return (
    <Wrapper>
      <TimerWrapper>
        <span>{Math.floor(dur.asDays())}d</span>
        <span>{dur.hours()}h</span>
        <span>{dur.minutes()}m</span>
        <span>{dur.seconds()}s</span>
      </TimerWrapper>
    </Wrapper>
  );
};

export default CountdownTimer;

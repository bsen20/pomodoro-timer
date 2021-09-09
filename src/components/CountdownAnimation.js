import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";
const CountdownAnimation = ({
  key,
  timer,
  animate,
  children,
  primaryColor,
}) => {
  const { stopAnimate, executing } = useContext(SettingsContext);
  const play = () => {
    var audio = new Audio(
      "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"
    );
    audio.play();
  };
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["#1DDE9B", 0.33],
        ["#3674F5", 0.33],
        ["#EF690C", 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        stopAnimate();
        play();
        alert(
          `${
            executing.active === "short" || executing.active === "long"
              ? executing.active + " break "
              : "work"
          }  : Time reached`
        );
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;

import React, { useContext } from "react";
import styles from "../styles/components/Countdown.module.css";
import { countdownContext } from "../contexts/CountdownContext";

const Countdown = () => {
  const {
    hasFinished,
    minutes,
    seconds,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(countdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, seconfRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{seconfRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.buttonCountdown}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountdown}
              type="button"
              className={`${styles.buttonCountdown} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              onClick={startCountdown}
              type="button"
              className={styles.buttonCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;

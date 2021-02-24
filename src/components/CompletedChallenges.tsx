import styles from "../styles/components/CompleteChallenges.module.css";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { useContext } from "react";
const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengeContext);

  return (
    <div className={styles.completedChanllengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};

export default CompletedChallenges;

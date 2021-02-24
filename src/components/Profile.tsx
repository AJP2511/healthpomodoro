import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/AJP2511.png" alt="foto perfil" />
      <div>
        <strong>Allan Johnson</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;

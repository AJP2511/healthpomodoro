import "../styles/Global.css";
import { ChallengesProvider } from "../contexts/ChallengeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps}></Component>
    </ChallengesProvider>
  );
}

export default MyApp;

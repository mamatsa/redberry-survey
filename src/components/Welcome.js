import rocketman from '../images/rocketman.png';
import '../styles/welcome.css';

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome Rocketeer !</h1>
      <button className="btn">Start Questionnarie</button>
      <a href="/">Submitted Applications</a>
    </div>
  );
}

export default Welcome;

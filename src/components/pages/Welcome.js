import { Link } from 'react-router-dom';
import '../../styles/welcome.css';

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome Rocketeer !</h1>
      <Link to="/survey/1" className="welcome-start">
        <button className="btn">Start Questionnarie</button>
      </Link>
      <Link to="/applications">Submitted Applications</Link>
    </div>
  );
}

export default Welcome;

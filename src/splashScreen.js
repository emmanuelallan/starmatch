import { useHistory } from 'react-router-dom';
import './splash.css';

const SplashScreen = () => {
    const history = useHistory();
    const handleClick = () => history.push('/game');
  return (
    <div className="container">
      <button type="button" className="game" onClick={handleClick}>
          Play
      </button>
    </div>
  );
};

export default SplashScreen;

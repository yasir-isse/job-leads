import './logo.css';
import { AiOutlineNodeIndex } from 'react-icons/ai';
const Logo = ({ color }) => {
  return (
    <div className={`logo-container ${color === 'dark' ? 'dark' : ''} `}>
      <div className='logo-icon'>
        <AiOutlineNodeIndex />
      </div>
      <div className='logo-text'>
        <h3>Job Leads</h3>
      </div>
    </div>
  );
};

export default Logo;

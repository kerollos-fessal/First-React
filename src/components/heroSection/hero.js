import './hero.css';
import Button from '../reusableComponents/buttons/button'

function Hero() {
  return (
    
    <div className="hero ps-5 pt-5 text-white">
        <h1>Kerollos Fessal</h1>
        <div className='ps-4 ms-2'><p className='fs-5'>Front-end Developer</p>
        <Button content='Contact Me'/></div>
    </div>
  );
}
export default Hero;

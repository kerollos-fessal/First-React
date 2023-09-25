import './footer.css';
import Button from '../reusableComponents/buttons/button'
import { FaEnvelope } from 'react-icons/fa';
import { FaIdCard } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Footer() {
    return (

    <div className="px-5 pt-5 mt-5 d-flex bg-black text-white justify-content-between">
        <div className='d-flex flex-column'>
            <h3 className='pb-3'>GET IN TOUCH</h3>
            <p className='fs-5'><FaEnvelope /> kerofessal77@Gmail.com</p>
            <p className='fs-5'><FaIdCard />+201020878012</p>
        </div>
        <div ><Button content='Contact Me'/></div> 
        <div className='d-flex flex-column'>
            <div className=' d-flex flex-row pb-3'><div className='px-2 fs-4 text-white'><FaLinkedin /></div>
                <div className='px-2 fs-6 text-white fs-4'><FaFacebook /></div>
                <div className='px-2 fs-6 text-white fs-4'><FaTwitter /></div>
            </div>
            <p className='fs-5'>Copyright @2023 iti</p>
        </div>
    </div>
);
}
export default Footer;
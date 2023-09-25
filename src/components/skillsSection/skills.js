import './skills.css';
import UnList from '../reusableComponents/list/list'
function Skills() {
  return (
    
    <div className=" px-5 pt-5 mx-auto mt-5 bg-secondary">
        <h2 className='text-white shade mb-5 fs-1 fw-bold'>Skills</h2>
        <p className='fs-5 text-white'>qutiae ores ipsaium a neremque, soluta temporolorum eaque qutiae ores ipsaium a neremque, soluta temporolorum eaque um a neremque, soluta temporolorum eaque qutiae ores ipsaium a neremque, soluta temporolorum eaque  eremque, soluta temporolorum eaq praesentium laboriosam sapiente ad molestias qui odit consequatur, porro autem odio, </p>
    <div className='container d-flex justify-content-center'>
      <div className='d-flex justify-content-center'>
          <ul className='list-unstyled fw-bold'>
            <li className='border-bottom border-white border-2 border-black px-5 py-3'>My Focus</li>
            <li className='py-3'>UI/UX Design</li>
            <li className='py-3'>React JS</li>
            <li className='py-3'>JavaScript</li>
            <li className='py-3'>Node JS</li>
          </ul>
          <div>
            <ul className='list-unstyled fw-bold ms-5'>
              <UnList content='HTML'/>
              <UnList content='JAVASCRIPT'/>
              <UnList content='CSS'/>
              <UnList content='SASS'/>
              <UnList content='BOOTSTRAP'/>
              <UnList content='JQUERY'/>
            </ul>
              
          </div>
      </div>
    </div>
    </div>
)}

export default Skills;
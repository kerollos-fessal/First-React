import './list.css'

const UnList = (props)=>{
    return (
            <li className=' py-3'>
            <div className="fs-6 progress rounded-0 d-block text-start bg-white pe-5 pb-4" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
           <div className="progress-bar text-start  bg-black" style={{ width: 350 }}> <div className='bar'>{props.content}</div><div className='w-75 bg-white'></div></div>
            </div>
            </li>
    );
};
export default UnList;
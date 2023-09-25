import './card.css'

const Card = (props)=>{
    return (
        <div className='rounded-2 d-flex align-items-center justify-content-center bg-secondary  fs-2 w-100 h-100 cardio align-items-center'>{props.content}</div>
    );
};
export default Card;
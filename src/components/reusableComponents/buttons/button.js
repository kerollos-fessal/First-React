import './button.css'

const Button = (props)=>{
    return (
        <button className='rounded-2'
            type={props.type}>
            {props.content}
        </button>
    );
};
export default Button;
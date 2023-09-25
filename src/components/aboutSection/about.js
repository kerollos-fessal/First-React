import './about.css';
import Button from '../reusableComponents/buttons/button'

function About() {
  return (
    
    <div className=" px-5 pt-5 d-flex">
        <p className='text-muted fs-1 fw-bold w-50 shades'>About Me</p>
        <div className='w-75 d-flex flex-column'>
        <p className='fs-6 ms-2 text-start text-secondary'>qutiae ores ipsam? Aliasnemo facere repellat rem pariatur laudantium a neremque, soluta tempora cum accusantium, inventore voluptate pariatur corrupti repellendus explicabo fugit magni suscipit dolorum autem nemo, molestias cupiditate veritatis similique laborum blanditiis. Soluta maiores voluptatem eius suscipit neque illo! Illo, quasi quidem cum sit atque et adipisci voluptatum. Numquam exercitationem tempora, voluptate earum quam quidem rerum? Obcaecati aliquid adipisci dolorum eaque praesentium laboriosam sapiente ad molestias qui odit consequatur, porro autem odio, laudantium veritatis illum dolores ipsa culpa iure. Laudantium, fugit dicta id sint velit ducimus magnam voluptates dolor commodi incidunt, quod quaerat consectetur dolorem ipsam numquam consero!</p>
        <div  className='align-self-start'><Button content='Download Resume'/></div>
        </div>
    </div>
  );
}
export default About;

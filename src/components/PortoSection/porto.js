import './porto.css';
import Card from '../reusableComponents/cards/card'
function Porto() {
  return (
    
  <div className='mt-5 text-start'>
    <h2 className='shady text-muted fs-1 fw-bold w-50 pb-5'>Portofolio</h2>
    <div className='container'>
        <div class="row  g-4">
                <div className='col-md-4 d-flex portoWid text-center'>
                    <Card content='WEB DESIGN'/>
                </div>
                <div className='col-md-4 portoWid text-center'>
                    <Card content='MOBILE DESIGN'/>
                </div>
                <div className='col-md-4 d-flex portoWid text-center'>
                    <Card content='LOGO DESIGN'/>
                </div>
                <div className='col-md-4 d-flex portoWid text-center'>
                    <Card content='WEB APPLICATION DEVELOPMENT'/>
                </div>
                <div className='col-md-4 d-flex portoWid text-center'>
                    <Card content='MOBILE APPLICATION DEVELOPMENT'/>
                </div>
                <div className='col-md-4 d-flex portoWid text-center'>
                    <Card content='PWA APPLICATION DEVELOPMENT'/>
                </div>
        </div>
    </div>
</div>
);
}
export default Porto;

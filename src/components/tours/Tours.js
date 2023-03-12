import './Tours.css';
import Tour from './Tour/Tour';
const data =require('..//..//data/db.json')
function Tours(){
    return(
        <div className='tour'>
        {data.map(element=>{
            return (
                <Tour name={element.name} image={element.image}/>
            )
        })}
        </div>
    )
}
export default Tours;

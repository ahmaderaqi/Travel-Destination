import './Tours.css';

const data =require('../../data/db.json')
function Tours(){
    return(
        <div className='tours'>
        {data.map(element=>{
            return (
                <div key={element.id}>

                    <h3>{element.name}</h3>
                    <img src={element.image} alt={element.name}/>
                </div>
            )
        })}
        </div>
    )
}
export default Tours;
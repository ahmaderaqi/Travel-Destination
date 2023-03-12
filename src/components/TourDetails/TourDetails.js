const data=require('..//..//data/db.json')
function TourDetails(){
    return(
        <>
       
            {data.map(element=>{
            return (
                <p>{element.info}</p>
                
            )
        })}
        </>
    )
}
export default TourDetails ;
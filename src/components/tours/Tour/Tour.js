import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Tour.css'
const data = require('..//..//..//data/db.json')
function Tour(props) {
    return (
        
            <>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                       
                    </Card.Text>
                    <Button variant="primary" >I need a Toy !</Button>
                </Card.Body>
            </Card>
        </>
       // </div>

        
    )
}
export default Tour;
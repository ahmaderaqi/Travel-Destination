import './Header.css'
import { Link } from "react-router-dom";
const data=require('..//..//data/db.json')

// function Header() {
//     return (
//         <>
//             <h1>Travel Destination</h1>
//             <nav>
//                 <link to="/">Home</link>
//                 <link to="/about">Details</link>
//             </nav>


//         </>

//     )
// }
// export default Header;



function Header() {
    return(
        <>
            <h1>Travel Destination</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/city/:{data.id}">Details</Link>
            </nav>
        </>
    )
}

export default Header;
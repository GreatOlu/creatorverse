import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Back to the hoempage</Link>
        </div>
     );
}
 
export default NotFound;
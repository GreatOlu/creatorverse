import { Link } from "react-router-dom";

const Card = ({ creators, isPending }) => {

    return ( 
        <div className="grid">

            {!isPending && creators.length === 0 ? (
            <p>No content creators yet!</p>
            ) : (
            creators.map((creator) => (
                <article className="card" key={creator.id}>
                    <div className="flex"><h4>{creator.name}</h4>
                    <div>
                        <Link to={`/${creator.id}`}><i class="fa fa-info-circle"></i></Link>
                        <i> </i>
                        <Link to={`/edit/${creator.id}`}><i class="fa fa-pencil"></i></Link>
                    </div>
                    </div>
                
                    <div className="visit">
                        <div>
                            <i>visit site </i>
                            <Link to={creator.url} target="_blank"><i class="fa fa-external-link"></i></Link>
                        </div>
                    </div>
                    

                    <p className="desc">{creator.description}</p>
                </article>
            ))
            )}
        </div>
     );
}
 
export default Card;
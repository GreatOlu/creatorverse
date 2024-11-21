import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../client';  // Adjust the path to your client.js

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null);
  const [isPending, setisPending] = useState(true)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      setCreator(data);
      setisPending(false)

    };
    fetchCreator();
  }, [id]);

  const handleDelete = async () => {
    const { data, error } = await supabase.from('creators').delete().eq('id', id).select()

    if (error) {
        console.log(error)
    }

    if (data) {
        navigate('/')
        console.log(data)
    }
  }

    return ( 
        <div>
            { isPending && <div>Loading...</div>}
            { creator && 

            <div>
              <div className='info'>
                <img src={creator.imageURL} alt="" />
                <div>
                  <h1>{creator.name}</h1>
                  <p>{creator.description}</p>
                  <div>
                      <i>visit site </i>
                      <Link to={creator.url} target="_blank"><i class="fa fa-external-link"></i></Link>
                  </div>
                </div>
              </div>
              
              <div className='mybtn'>
              <button className='edit-btn'><Link to={`/edit/${creator.id}`}>EDIT</Link></button>
              <button className='delete-btn' onClick={handleDelete}>DELETE</button>  
              </div>
  
            </div> }
        </div>
     );
}
 
export default ViewCreator;
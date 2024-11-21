import { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../client";

const ShowCreators = () => {
    const [creators, setCreators] = useState([]);
    const [isPending, setisPending] = useState(true);

    useEffect(() => {
      getCreators();
    }, []);
  
    async function getCreators() {
      const { data } = await supabase.from("creators").select();
      setCreators(data);
      setisPending(false);
    }

    return ( 
        <div>
          { isPending && <div>Loading...</div>}
          {creators && <Card key={creators.id} creators={creators} isPending={isPending}/>}
        </div>
     );
}
 
export default ShowCreators;
import { replace, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";

const EditCreator = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !url || !description || !imageURL) {
            setFormError('Please fill in all the fields correctly')
            return
        }

        const { data, error } = await supabase.from('creators').update({ name, url, description, imageURL}).eq('id', id).select()

        if (error) {
            console.log(error)
            setFormError('Please fill in all the fields correctly')
        }

        if (data) {
            console.log(data)
            setFormError(null)
            navigate('/')
        }
    }

    useEffect(() => {
        const getCreators = async () => {
            const { data, error } = await supabase.from('creators').select().eq('id', id).single()

            if (error) {
                navigate('/', {replace: true})
            }
    
            if (data) {
                setName(data.name)
                setUrl(data.url)
                setDescription(data.description)
                setImageURL(data.imageURL)
                console.log(data)
            }
        }

        getCreators()

    }, [id, navigate])

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Creator name: </label>
                <input type="text" id="name" value={name} required onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="imageURL">Image Link: </label>
                <input type="url" id="imgURL" value={imageURL} required onChange={(e) => setImageURL(e.target.value)}/>
                <small id="email-helper"><i>Provide a link to an image of your creator. Be sure to include the http://</i></small>

                <label htmlFor="description">Description: </label>
                <textarea id="description" value={description} required onChange={(e) => setDescription(e.target.value)}></textarea>
                <small id="email-helper"><i>Provide a description of the creator. Who are they? What makes them interesting?</i></small>

                <label htmlFor="url">URL: </label>
                <input type="url" id="url" value={url} required onChange={(e) => setUrl(e.target.value)}/>
                <small id="email-helper"><i>Provide at least one of the creator's social media links.</i></small>

                <button>SUBMIT</button>

                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
     );
}
 
export default EditCreator;
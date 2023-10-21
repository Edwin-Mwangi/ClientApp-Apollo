import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries';
import { useState } from 'react';

//functional component
const AddBook = () => {
    //form functionality
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        console.log(`Name: ${name} Age: ${genre} AuthorId: ${authorId}`)
    }

    //running the query to get data
    const{ data, loading, error } = useQuery(getAuthorsQuery);

    const displayAuthors = () => {
        if(loading) return(<option disabled>Loading Authors...</option>)
        if(error) return(<option disabled>{error.message}</option>)
        else{
            return data.authors.map( author => {
                return(<option key={ author.id }
                               value={ author.id }
                            >{ author.name }</option>)
            })
        }
    }

    return ( 
        <form id="add-book" onSubmit={submitForm} >
            <div className="fields">
                <input type="text" placeholder='name' onChange={ e => setName(e.target.value)} />
                <input type="text" placeholder='genre' onChange={ e => setGenre(e.target.value)}/>
                <select onChange={ e => setAuthorId(e.target.value)}>
                    <option value="">Select Author</option>
                    { displayAuthors() }
                </select>
            </div>
            <button>+</button>
        </form>
     );
}
 
export default AddBook;


//class component
// class AddBook extends Component{
//     //tobedone
//     render(){
//         return(
//             <div>
//                 <ul id="book-list">
//                     <li>Book Name</li>
//                 </ul>
//             </div>
//         )
//     }
// }

// export default graphql(getBooksQuery)(BookList);


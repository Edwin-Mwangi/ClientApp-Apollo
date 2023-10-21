import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import { useState } from 'react';

//functional component
const AddBook = () => {
    //form functionality
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

     //running the query to get data
     const{ data, loading, error } = useQuery(getAuthorsQuery);

     //display author options
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

     //define func to run mutation
     //refetch queries displays updates in DOM automatically
     const [addBook] = useMutation(addBookMutation, {
        variables: {name, genre, authorId },
        refetchQueries: [{query: getBooksQuery}] //could also update cache
     })

    const submitForm = (e) => {
        e.preventDefault()
        // console.log(`Name: ${name} genre: ${genre} AuthorId: ${ authorId }`)
        addBook(name, genre, authorId);
        setName(''); 
        setGenre('');
        setAuthorId('');
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


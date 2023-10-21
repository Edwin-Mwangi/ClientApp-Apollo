import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

//functional component
const Booklist = () => {
    const {loading, error, data } = useQuery(getBooksQuery);
    // console.log(`loading: ${loading}\ndata: ${data}\nerror: ${error}`)
    // console.log(data.books)
    const [selected, setSelected] = useState(null)

    const displayBooks = () => {
        if(loading){
            return ( <div>Loading books...</div> )
        }
        if(error){
            return ( <div>Error: {error.message}</div> )
        }
        else {
            return data.books.map(book => {
                //remember to include "e" func to house setSelected otherwise the func will run infinite tyms 
                return(<li key={book.id} onClick={e => {setSelected(book.id)}} >{book.name}</li>)
            }) 
        }

    }

    return ( 
        <div>
            <ul id="book-list">
                { displayBooks()}
            </ul>
            <BookDetails bookId={selected}/>
        </div>
     );
}
 
export default Booklist;


//class component
// class BookList extends Component{
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


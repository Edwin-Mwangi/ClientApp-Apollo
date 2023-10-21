import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';

//functional component
const Booklist = () => {
    const {loading, error, data } = useQuery(getBooksQuery);
    // console.log(`loading: ${loading}\ndata: ${data}\nerror: ${error}`)
    // console.log(data.books)

    const displayBooks = () => {
        if(loading){
            return ( <div>Loading books...</div> )
        }
        if(error){
            return ( <div>Error: {error.message}</div> )
        }
        else {
            return data.books.map(book => {
                return(<li key={book.id} >{book.name}</li>)
            }) 
        }

    }

    return ( 
        <div>
            <ul id="book-list">
                { displayBooks()}
            </ul>
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


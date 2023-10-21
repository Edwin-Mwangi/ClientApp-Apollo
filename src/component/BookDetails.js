import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

//functional component
const BookDetails = ({ bookId }) => {
    const {loading, error, data: book } = useQuery(getBookQuery, {
        variables: { bookId }
    });
    // console.log(`loading: ${loading}\ndata: ${data}\nerror: ${error}`)
    // console.log(bookId)

    const displayBookDetails = () => {
        if(loading){
            return ( <div>Loading books...</div> )
        }
        if(error){
            return ( <div>Error: {error.message}</div> )
        }
        else {
            if(bookId){
                return(
                    <div>
                        <h2>{book.name}</h2>
                        <p>{book.genre}</p>
                        <p>{book.author.name}</p>
                        <ul className='other-books'>
                            {book.author.map(item => {
                                return <li key={item.id}>{item.name}</li>
                            })}
                        </ul>
                    </div>
                )
            }
        }

    }

    return ( 
        <div id='book-details'>
            <p>Output book details here</p>
            {displayBookDetails()}
        </div>
     );
}
 
export default BookDetails;


//class component
// class BookDetails extends Component{
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

// export default graphql(getBooksQuery)(BookDetails);


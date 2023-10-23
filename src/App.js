import BookList from './component/BookList';
import AddBook from './component/AddBook'
//apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    // cache: new InMemoryCache()
    //merge to prevent dataloss(rare) when updating cache
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            books: {
              merge(existing, incoming){
                return incoming;
              }
            },
            authors: {
              merge(existing, incoming){
                return incoming;
              }
            }
          }
        }
      }
    })
  })

  return (
// ApolloProvider wraps the tags
    <ApolloProvider client={client}>  
      <div className="App">
        <h1>Ninja Reading List</h1>
        <BookList/>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;

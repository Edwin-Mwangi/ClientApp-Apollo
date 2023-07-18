import './App.css';
import Booklist from './component/Booklist';
//apollo client
import ApolloClient from '@apollo/client';
import {ApolloProvider} from '@apollo/client'

function App() {

  // const client = new ApolloClient({
  //   uri: 'http://http://localhost:4000/graphql?'
  // })

  return (
    <div className="App">
     <h1>Ninja Reading List</h1>
     <Booklist/>
    </div>
  );
}

export default App;

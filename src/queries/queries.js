import { gql } from '@apollo/client'

const getAuthorsQuery = gql`
    {
        authors{
            id
            name
            age
        }
    }
`

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`
const addBookMutation = gql`
    mutation addBook($name:String!, $genre: String!, $authorId: ID!) { 
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            genre
        }
    }
`

export { getAuthorsQuery, getBooksQuery, addBookMutation}
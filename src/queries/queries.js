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

export { getAuthorsQuery, getBooksQuery }
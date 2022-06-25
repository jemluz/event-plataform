import { gql, useQuery } from "@apollo/client"
// import { useEffect } from "react"
// import { client } from "./lib/apollo"

// useEffect é uma forma de fazer a requisição pelo react (ele vai dentro do App())
// useEffect(() => {
//   client.query({
//     query: GET_LESSONS_QUERY
//   }).then(response => {
//     console.log(response.data)
//   })
// }, [])

// useQuery é um hook (que vai substituir o useEffect), uma função que adiciona um comportamento ao componente

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
} 

function App() {
  // faz a requisição
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    // itera a response e faz o biding em lista
    <ul>
      {
        data?.lessons.map(lesson => {
          return <li>{lesson.title}</li>
        })
      }
    </ul>
  )
}

export default App

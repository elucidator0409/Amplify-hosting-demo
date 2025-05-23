
import './App.css'


import { generateClient } from "aws-amplify/api"
import type { Schema } from "../amplify/data/resource"

const client = generateClient<Schema>()

async function sayHello() {
  const result = await client.queries.sayHello({
      name: 'Elu'
  })
  console.log(result)
}

function App() {
  

  return (
    <>
      <button onClick={sayHello}>Say Hello</button>
    </>
  )
}

export default App

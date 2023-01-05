
import { PostCodeSearch } from './Components/PostCodeSearch';
import {QueryClient, QueryClientProvider} from 'react-query'

import './App.css'

function App() {
let queryclient = new QueryClient()
  return (
    <QueryClientProvider client={queryclient}>

    <div className="App">
      <h1>Postcoders</h1>
      <PostCodeSearch/>
    </div>
    </QueryClientProvider>
  )
}

export default App

import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './ApolloClient'
import User from './User'
import Posts from './Posts'
import Toggle from './Toggle'

function App() {
  const [showPosts, setShowPosts] = useState(true)

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>React GraphQL Sample App</h1>
        <Toggle showPosts={showPosts} setShowPosts={setShowPosts} />
        <div className="content-container">
          {showPosts ? <Posts /> : <User />}
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App

import React, { useState } from 'react'
import "./App.scss";
const App = () => {
    const [name, setName] = useState("")
   return (
    <div>
        <h1>hello from react app</h1>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="please insert your name..."/>
        <button onClick={() => api_electron.sendNotification("Hello", name.toUpperCase())}>send notification</button>
    </div>
  )
}

export default App
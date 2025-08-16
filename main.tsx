import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css' // or wherever your global Tailwind CSS is imported

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

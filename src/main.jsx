import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppointmentContextProvider } from './context/AppointmentContext.jsx'
AppointmentContextProvider


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AppointmentContextProvider>
        <App />
      </AppointmentContextProvider>
  </React.StrictMode>
)

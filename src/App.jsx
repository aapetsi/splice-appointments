import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppointmentForm from './components/AppointmentForm'
import AppointmentList from './components/AppointmentList'

const router = createBrowserRouter([
  { path: '/', element: <AppointmentList /> },
  { path: '/new', element: <AppointmentForm /> }
])

function App() {
  return <RouterProvider router={router} />
}

export default App

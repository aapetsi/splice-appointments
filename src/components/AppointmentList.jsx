import { Link } from 'react-router-dom'
import { useAppointmentsContext } from '../hooks/useAppointmentContext'
import AppointmentCard from './AppointmentCard'

const AppointmentList = () => {
  const { appointments } = useAppointmentsContext()

  const AppointmentCards = appointments.map((x) => (
    <AppointmentCard key={x.id} appointment={x} />
  ))
  return (
    <div className='p-5'>
      <div className='flex justify-between mb-10 items-center'>
        <h1 className='text-2xl font-bold'>Splice Appointments</h1>
        <span
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
            type='button'
          >
            <Link to='/new'>Add New Appointment</Link>
          </span>
      </div>
      <div className='flex flex-wrap'>{AppointmentCards}</div>
    </div>
  )
}

export default AppointmentList

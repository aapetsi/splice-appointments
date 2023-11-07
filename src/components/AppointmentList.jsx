import { Link } from 'react-router-dom'
import { useAppointmentsContext } from '../hooks/useAppointmentContext'
import AppointmentCard from './AppointmentCard'
import { useState } from 'react'

const AppointmentList = () => {
  const { appointments } = useAppointmentsContext()
  const [searchQuery, setSearchQuery] = useState('')

  const AppointmentCards = searchQuery.length > 0 ? appointments.filter(x => x.coach.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1).map((x) => <AppointmentCard key={x.id} appointment={x} />) : appointments.map((x) => (
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
      <div className='mb-6'>
      <input
            className='shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='date'
            id='date'
            type='text'
            placeholder='Search for Coach'
            onChange={(e) => setSearchQuery(e.target.value)}
          />
      </div>
      <div className='flex flex-wrap'>{AppointmentCards}</div>
    </div>
  )
}

export default AppointmentList

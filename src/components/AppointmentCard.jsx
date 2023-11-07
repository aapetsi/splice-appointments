import PropTypes from 'prop-types'
import { useAppointmentsContext } from '../hooks/useAppointmentContext'

const AppointmentCard = (props) => {
  const { appointment } = props

  const { dispatch } = useAppointmentsContext()

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_APPOINTMENT', payload: id })
  }
  return (
    <div className='w-3/12 rounded overflow-hidden shadow-lg mb-6'>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{appointment.title}</div>
        <p className='text-gray-700 text-base mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <p className='text-base'>
          Coach:{' '}
          <span className='inline-block bg-purple-200 rounded-lg px-2 py-1 text-sm font-semibold text-gray-700 mr-2'>
            {appointment.coach}
          </span>
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <p className='text-base'>
          Date:{' '}
          <span className='inline-block bg-green-200 rounded-lg px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {appointment.date} {appointment.time}
          </span>
        </p>
        <p className='text-base'>
          Duration:{' '}
          <span className='inline-block bg-green-200 rounded-lg px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {appointment.startTime} to {appointment.endTime}
          </span>
        </p>
      </div>
      <div className='flex px-6 pt-4 pb-2 mb-6 items-center justify-end'>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
          type='submit'
          onClick={() => handleDelete(appointment.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

AppointmentCard.propTypes = {
  appointment: PropTypes.object.isRequired
}

export default AppointmentCard

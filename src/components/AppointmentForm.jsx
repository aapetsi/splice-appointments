import { useState } from 'react'
import { useAppointmentsContext } from '../hooks/useAppointmentContext'

const AppointmentForm = () => {
  const { dispatch } = useAppointmentsContext()

  const [coach, setCoach] = useState('')
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { coach, title, date, startTime, endTime, description }
    dispatch({ type: 'CREATE_APPOINTMENT', payload })
    history.back()
  }

  return (
    <div className='mt-12 flex justify-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <h2 className='mb-4 text-xl font-bold text-center'>
          Create new appointement
        </h2>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='coach'
          >
            Coach
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='coach'
            name='coach'
            type='text'
            value={coach}
            placeholder='Michael Jordan'
            onChange={(e) => setCoach(e.target.value)}
          />
        </div>

        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='title'
          >
            Title
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='title'
            id='title'
            type='title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='date'
          >
            Date
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='date'
            id='date'
            type='date'
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='startTime'
          >
            Start Time
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='startTime'
            id='startTime'
            type='time'
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>

        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='endTime'
          >
            End Time
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='endTime'
            id='endTime'
            type='time'
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='description'
          >
            Description
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='description'
            id='description'
            cols='30'
            rows='4'
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Save
          </button>

          <button
            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
            type='button'
            onClick={() => history.back()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AppointmentForm

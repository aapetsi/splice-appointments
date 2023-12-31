import { AppointmentContext } from '../context/AppointmentContext'
import { useContext } from 'react'

export const useAppointmentsContext = () => {
  const context = useContext(AppointmentContext)

  if (!context) {
    throw new Error(
      'useAppointmentsContext must be used within a AppointmentContextProvider'
    )
  }

  return context
}

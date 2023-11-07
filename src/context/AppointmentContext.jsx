import { createContext, useReducer } from 'react'
import { nanoid } from 'nanoid'

export const AppointmentContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const appointmentsReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_APPOINTMENT':
      // eslint-disable-next-line no-case-declarations
      const coachAppointments = state.appointments.filter(appointment => appointment.coach === action.payload.coach)

      for (const appointment of coachAppointments) {
        if (
          action.payload.date === appointment.date &&
          (
            (action.payload.startTime >= appointment.startTime &&
              action.payload.startTime < appointment.endTime) ||
            (action.payload.endTime > appointment.startTime &&
              action.payload.endTime <= appointment.endTime) ||
            (action.payload.startTime <= appointment.startTime &&
              action.payload.endTime >= appointment.endTime)
          )
        ) {
          alert("Conflict: A conflicting appointment already exists for this coach.")
          return state
        }
      }

      return {
        appointments: [...state.appointments, {...action.payload, id: nanoid(6)}]
      }
    case 'DELETE_APPOINTMENT':
      state.appointments.filter((x) => x.id === action.payload)
      return {
        appointments: state.appointments.filter((x) => x.id !== action.payload)
      }
    default:
      return state
  }
}

const appointments = [
  {
    id: 1,
    title: 'Yoga for beginners',
    coach: 'Colin Powell',
    description: 'Lorem ipsum dolor sit amet veni aras pat um vedi vici',
    date: '2023-11-07',
    startTime: '01:35',
    endTime: '02:45'
  },
  {
    id: 2,
    title: 'Prenatal Yoga',
    coach: 'Brendan Rogers',
    description: 'Lorem ipsum dolor sit amet veni aras pat um vedi vici',
    date: '2023-11-07',
    startTime: '01:35',
    endTime: '02:45'
  },
  {
    id: 3,
    title: 'Power Flow',
    coach: 'Gary Kasparov',
    description: 'Lorem ipsum dolor sit amet veni aras pat um vedi vici',
    date: '2023-11-07',
    startTime: '01:35',
    endTime: '02:45'
  },
  {
    id: 4,
    title: 'Yoga on hammocks',
    coach: 'Aarav Brahman',
    description: 'Lorem ipsum dolor sit amet veni aras pat um vedi vici',
    date: '2023-11-07',
    startTime: '01:35',
    endTime: '02:45'
  },
  {
    id: 5,
    title: 'Controlled Breathing',
    coach: 'Victor Wemby',
    description: 'Lorem ipsum dolor sit amet veni aras pat um vedi vici',
    date: '2023-11-07',
    startTime: '01:35',
    endTime: '02:45'
  }
]

// eslint-disable-next-line react/prop-types
export const AppointmentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appointmentsReducer, {
    appointments
  })

  return (
    <AppointmentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppointmentContext.Provider>
  )
}

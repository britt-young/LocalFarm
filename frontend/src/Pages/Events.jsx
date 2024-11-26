import React from 'react'
import EventCalendar from '../Components/EventCalendar'
import EventsGrid from '../Components/EventsGrid'

const Events = () => {
  return (
    <div className='flex'>
      <EventCalendar />
      <EventsGrid />
    </div>
  )
}

export default Events
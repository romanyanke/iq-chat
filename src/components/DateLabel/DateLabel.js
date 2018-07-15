import React from 'react'
import { oneDay, oneWeek, displayTime, displayWeekday, displayDate } from './format'
import people from 'components/MessageList/mock/people.json'

const today = people[0].timestamp

const DateLabel = ({ ts }) => {
  const diff = today - ts
  return (
    <span className="DateLabel">
      {diff < oneDay ? displayTime(ts) : diff < oneWeek ? displayWeekday(ts) : displayDate(ts)}
    </span>
  )
}
export default DateLabel

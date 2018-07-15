const locale = 'ru-RU'

export const oneDay = 24 * 60 * 60 * 1000
export const oneWeek = 7 * oneDay

const timeFormat = new Intl.DateTimeFormat(locale, {
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
})

const weekFormat = new Intl.DateTimeFormat(locale, { weekday: 'short' })

const dateFormat = new Intl.DateTimeFormat(locale, {
  month: 'numeric',
  day: 'numeric',
})

export const displayTime = timeFormat.format
export const displayWeekday = weekFormat.format
export const displayDate = dateFormat.format

import people from 'components/MessageList/mock/people'
import messages from 'components/MessageButtons/mock/messages'

export const randomElement = (arr, limit = arr.length) => arr[Math.floor(Math.random() * limit)]
export const getRandomChat = () => randomElement(people)
export const getRandomMessage = () => randomElement(messages)

import React from 'react'
import MessageList from 'components/MessageList'
import MessageButtons from 'components/MessageButtons'

const Chat = () => {
  return (
    <div className="Chat">
      <MessageList />
      <MessageButtons />
    </div>
  )
}

export default Chat

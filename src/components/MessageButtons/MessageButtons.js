import React, { Component } from 'react'
import { connect } from 'react-redux'
import { message } from 'components/MessageList/MessageList.actions'
import { getHistoryChats } from '../MessageList/MessageList.selectors'
import { getRandomChat, getRandomMessage, randomElement } from './random'

let increment = 0

class MessageButtons extends Component {
  sendMessage(chat) {
    this.props.message({
      ...chat,
      message: getRandomMessage(),
      timestamp: Date.now(),
    })
  }

  newMessage = () => {
    increment++
    this.sendMessage({
      name: `Неизвестный ${increment}`,
      avatar: 'https://www.placecage.com/50/50',
      id: `uniqId-${increment}`,
    })
  }

  randomMessage = () => {
    this.sendMessage(getRandomChat())
  }

  recentMessage = () => {
    this.sendMessage(randomElement(this.props.chats, 10))
  }

  render() {
    return (
      <div className="MessageButtons">
        <button onClick={this.randomMessage}>От случайного</button>
        <button onClick={this.recentMessage}>Из последних</button>
        <button onClick={this.newMessage}>Не из списка</button>
      </div>
    )
  }
}

export default connect(
  store => ({
    chats: getHistoryChats(store),
  }),
  { message },
)(MessageButtons)

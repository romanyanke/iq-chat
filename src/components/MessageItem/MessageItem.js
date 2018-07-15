import React from 'react'
import cn from 'classnames'
import DateLabel from 'components/DateLabel'

const MessageItem = ({ data, isOpened }) => {
  return (
    <div className={cn('MessageItem', { isOpened })}>
      <div className="MessageItem-column _avatar">
        <div className="MessageItem-avatar">
          <img src={data.avatar} alt={data.name} width="42" height="42" />
        </div>
      </div>
      <div className="MessageItem-column _body">
        <div className="MessageItem-name">
          {data.hasOwnProperty('ownIndex') ? `[${data.ownIndex}]` : ''} {data.name}
        </div>
        <div className="MessageItem-text">{data.message}</div>
      </div>
      <div className="MessageItem-column _meta">
        <div className="MessageItem-date">
          <DateLabel ts={data.timestamp} />
        </div>
        {data.unreadCount ? (
          <div className="MessageItem-unread-count">{data.unreadCount}</div>
        ) : null}
      </div>
    </div>
  )
}

export default MessageItem

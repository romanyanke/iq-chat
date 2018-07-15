import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageItem from 'components/MessageItem'
import { List, AutoSizer, InfiniteLoader } from 'react-virtualized'
import { openChat, fetchHistory } from './MessageList.actions'
import { getHistoryChats, getOpenedChatId } from './MessageList.selectors'

const ROW_HEIGHT = 67
const PER_LOAD = 30

class MessageList extends Component {
  loadedCount = 0

  loadMore = ({ startIndex, stopIndex }) => {
    this.loadedCount = this.loadedCount + (stopIndex - startIndex)
    this.props.fetchHistory({ startIndex: startIndex, stopIndex: stopIndex })
  }

  isRowLoaded = ({ index }) => index < this.loadedCount

  componentDidMount = () => {
    this.loadMore({ startIndex: 0, stopIndex: PER_LOAD * 2 })
  }

  render() {
    const { openChat, openedChatId, list } = this.props

    return (
      <div className="MessageList">
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isRowLoaded={this.isRowLoaded}
              loadMoreRows={this.loadMore}
              rowCount={1000}
              threshold={PER_LOAD}
            >
              {({ onRowsRendered, registerChild }) => {
                return (
                  <List
                    height={height}
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    rowCount={list.length}
                    rowHeight={ROW_HEIGHT}
                    rowRenderer={({ index, key, style }) => {
                      const data = list[index]
                      return (
                        <div
                          className="MessageList-Item"
                          key={key}
                          onClick={() => openChat({ id: data.id })}
                          style={style}
                        >
                          <MessageItem data={data} isOpened={openedChatId === data.id} />
                        </div>
                      )
                    }}
                    width={width}
                  />
                )
              }}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </div>
    )
  }
}

export default connect(
  store => ({
    list: getHistoryChats(store),
    openedChatId: getOpenedChatId(store),
  }),
  { openChat, fetchHistory },
)(MessageList)

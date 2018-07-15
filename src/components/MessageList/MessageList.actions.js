import { createAction, handleActions } from 'redux-actions'
import { loadHistory } from './mock/api'

const initialState = {
  openedChatId: null,
  history: [],
  unreadOffset: {},
}

export const openChat = createAction('open-chat')
export const message = createAction('message')
export const readMessages = createAction('read')
export const fetchHistory = createAction(
  'fetch',
  async ({ startIndex, stopIndex }) => await loadHistory({ startIndex, stopIndex }),
)

const currentUreadIds = {}

const actions = {
  [fetchHistory]: (list, { payload }) => {
    const updatedUnreadOffset = { ...list.unreadOffset }
    const newItems = payload.reduce((items, chat) => {
      if (updatedUnreadOffset[chat.id]) {
        delete updatedUnreadOffset[chat.id]
      } else {
        items.push(chat)
      }

      return items
    }, [])

    return { ...list, unreadOffset: updatedUnreadOffset, history: [...list.history, ...newItems] }
  },

  [openChat]: (list, { payload }) => {
    if (currentUreadIds[payload.id]) {
      delete currentUreadIds[payload.id]
      const index = list.history.findIndex(({ id }) => id === payload.id)
      const updatedItem = { ...list.history[index], unreadCount: 0 }
      const updatedList = [...list.history]
      updatedList.splice(index, 1, updatedItem)

      return { ...list, history: updatedList, openedChatId: payload.id }
    }

    return { ...list, openedChatId: payload.id }
  },

  [message]: (list, { payload }) => {
    currentUreadIds[payload.id] = true
    const chatIndex = list.history.findIndex(({ id }) => id === payload.id)
    if (chatIndex !== -1) {
      const oldChat = list.history.splice(chatIndex, 1)[0]
      const unreadCount = oldChat.unreadCount ? oldChat.unreadCount + 1 : 1
      const history = [{ ...oldChat, ...payload, unreadCount }, ...list.history]

      return { ...list, history }
    }

    return {
      ...list,
      unreadOffset: { ...list.unreadOffset, [payload.id]: true },
      history: [{ ...payload, unreadCount: 1 }, ...list.history],
    }
  },
}

export const reducer = handleActions(actions, initialState)

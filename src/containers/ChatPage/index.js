import React, { Component } from 'react'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import {List, Subheader, ListItem, TextField, RaisedButton} from 'material-ui'
import {darkBlack} from 'material-ui/styles/colors'
const socket = io('http://172.17.80.66:4001')

class ChatPage extends Component {
  state = {
    users: [],
    messages: [],
    inputValue: ''
  }

  componentWillMount () {
    const { intl } = this.context
    socket.on('joined', (payload) => this.addUserToList(payload))
    socket.on('left', (payload) => this.removeUserFromList(payload))
    socket.on('newMessage', (payload) => this.addMessage(payload))
    socket.on('users', (payload) => this.addUserList(payload))
    socket.emit('join', {'username': localStorage.getItem('username') || `Guest_${Math.random().toString(36).substring(7)}`})
    this.addUserToList({'username': intl.messages['chat.user']})
  }

  addUserList (payload) {
    this.setState({users: payload.users})
  }

  addUserToList (payload) {
    const { users } = this.state
    this.setState({users: [...users, payload.username]})
  }

  removeUserFromList (payload) {
    const { users } = this.state
    this.setState({users: users.filter(user => user !== payload.username)})
  }

  addMessage (payload) {
    const { messages } = this.state
    this.setState({messages: [...messages, {...payload}]})
  }

  sendMessage = () => {
    const { inputValue } = this.state
    if (inputValue.length) {
      const msg = {'message': inputValue}
      socket.emit('newMessage', msg)
      this.addMessage(msg)
      this.setState({ inputValue: '' })
    }
  }

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  _handleKeyPress = (event) => {
    if (event.charCode === 13) {
      this.sendMessage()
    }
  }

  render () {
    const { intl } = this.context
    const messageStrings = intl.messages

    return (
      <div style={styles.container}>
        <h1 style={styles.row}>{messageStrings['chat.title']}</h1>
        <div style={styles.row}>
          <List style={styles.col}>
            <Subheader>{messageStrings['chat.userlist']}</Subheader>
            {this.state.users.map((user, idx) =>
              <ListItem key={`user-${idx}`} primaryText={user} disabled />
            )}
          </List>
          <List style={styles.col}>
            <Subheader>{messageStrings['chat.messages']}</Subheader>
            {this.state.messages.map((data, idx) =>
              <ListItem
                key={`msg-${idx}`}
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>{data.username || messageStrings['chat.user']}:</span> {data.message}
                  </p>
                }
                disabled
              />
            )}
          </List>
        </div>
        <div style={styles.cell}>
          <TextField
            hintText={messageStrings['chat.message']}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyPress={this._handleKeyPress}
            fullWidth
          />
          <RaisedButton
            primary
            onClick={this.sendMessage}
            label={messageStrings['chat.send']}
            fullWidth />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingTop: 84
  },
  row: {
    width: '100%',
    display: 'flex'
  },
  cell: {
    width: '100%'
  },
  col: {
    flex: 1
  }

}

ChatPage.contextTypes = {
  intl: PropTypes.object.isRequired
}

export default ChatPage

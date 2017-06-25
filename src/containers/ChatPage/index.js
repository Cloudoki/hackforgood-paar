import React, { Component } from 'react'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import {List, Subheader, ListItem, TextField, RaisedButton} from 'material-ui';
import {darkBlack} from 'material-ui/styles/colors';
const socket = io('http://172.17.80.66:4001')

class ChatPage extends Component {
    state = {
        users: [],
        messages: [],
        inputValue: ''
    }
    
    componentWillMount() {
        socket.on('joined', (payload) => this.addUserToList(payload))
        socket.on('left', (payload) => this.removeUserFromList(payload))
        socket.on('newMessage', (payload) => this.addMessage(payload))
        socket.on('users', (payload) => this.addUserList(payload))
        socket.emit('join', {'username': localStorage.getItem('username') || `Guest_${Math.random().toString(36).substring(7)}`})
    }

    addUserList(payload) {
        // {'users': ['username', ...]}
        this.setState({users: payload.users})
    }

    addUserToList(payload) {
        console.log('addUserToList', payload)
        const { users } = this.state
        this.setState({users: [...users, payload.username]})
    }

    removeUserFromList(payload) {
        console.log('removeUserFromList', payload)
        const { users } = this.state
        this.setState({users: users.filter(user => user !== payload.username)})
    }

    addMessage(payload) {
        console.log('add message', payload)
        const { messages } = this.state
        this.setState({messages: [...messages, {...payload}]})
    }

    sendMessage = () => {
        const msg = {'message': this.state.inputValue}
        socket.emit('newMessage', msg)
        this.addMessage(msg)
        this.setState({inputValue: ''})
    }

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value})
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
                        {
                            this.state.users.map( (user, idx) => {
                                return <ListItem key={`user-${idx}`} primaryText={user} disabled={true} />
                            })
                        }
                    </List>
                    <List style={styles.col}>
                        <Subheader>{messageStrings['chat.messages']}</Subheader>
                        {this.state.messages.map((data, idx) =>
                            <ListItem key={`msg-${idx}`} secondaryText={
                                <p>
                                    <span style={{color: darkBlack}}>{data.username || messageStrings['chat.user']}:</span> {data.message}
                                </p>
                            } disabled={true} />
                        )}
                    </List>
                </div>
                <div style={styles.cell}>
                    <TextField hintText={messageStrings['chat.message']} value={this.state.inputValue} onChange={this.handleInputChange} fullWidth={true} />
                    <RaisedButton  primary={true} onClick={this.sendMessage} label={messageStrings['chat.send']} fullWidth={true} />
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
    alignItems: 'center'
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

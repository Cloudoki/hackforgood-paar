
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Paper, TextField, Chip, FlatButton } from 'material-ui'

class Profile extends Component {
  state = {
    person: {}
  }
  componentWillMount () {
    const { history } = this.props
    const id = history.location.state.id
    const person = this.props.people.people.find(pep => pep.id === id)
    console.log('PERSON', person)
    this.setState({ person })
  }
  render () {
    const { intl: { messages } } = this.context
    const { person } = this.state
    return (
      <div style={styles.container}>
        <Paper
          zDepth={2}
          style={styles.paper}
        >
          <div style={styles.leftColumn}>
            <div style={styles.leftColumnInner}>
              <div style={styles.avatar}>
                <img style={styles.avatarImg} src={person.avatar} />
              </div>
              <div style={styles.info}>
                {person.name}
              </div>
              <div style={styles.info}>
                {person.birthday}
              </div>
              <div style={styles.info}>
                {person.country}
              </div>
            </div>
          </div>

          <div style={styles.rightColumn}>
            <TextField
              floatingLabelText={messages['addProfile.textfield.experience.name']}
              fullWidth
              value={person.experience.job}
            />
            <TextField
              floatingLabelText={messages['addProfile.textfield.experience.date']}
              fullWidth
              value={person.experience.date}
            />
            <TextField
              floatingLabelText={messages['addProfile.textfield.experience.title']}
              fullWidth
              value={person.experience.title}
            />
            <TextField
              floatingLabelText={messages['addProfile.textfield.experience.description']}
              fullWidth
              value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
              multiLine
            />
            <div style={{ paddingTop: 10 }}>
              <span>{messages['addProfile.textfield.languages']}</span>
              <div style={styles.chipContainer}>
                {person.languages.map((lang, idx) =>
                  <Chip
                    style={styles.chip}
                    key={`language-${idx}`}
                  >{lang}</Chip>
                )}
              </div>
              <br />
              <span>{messages['addProfile.textfield.skills']}</span>
              <div style={styles.chipContainer}>
                {person.skills.map((skill, idx) =>
                  <Chip
                    style={styles.chip}
                    key={`language-${idx}`}
                  >{skill}</Chip>
                )}
              </div>
            </div>
            {
              this.props.auth.user.email == 'institution@test.com'
              ? <div style={styles.actions}>
                <FlatButton label={messages['profile.assign']} primary />
                <FlatButton label={messages['profile.make']} secondary />
              </div>
              : null
            }
          </div>
        </Paper>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 20,
    paddingTop: 84
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  paper: {
    display: 'flex',
    position: 'relative',
    width: 700,
    margin: '0 auto'
  },
  leftColumn: {
    maxWidth: 250,
    padding: '16px 0'
  },
  leftColumnInner: {
    borderRight: '1px solid #ccc',
    padding: '8px 32px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 400,
    minHeight: '100%'
  },
  rightColumn: {
    flex: 1,
    padding: '24px 32px'
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: '50%',
    overflow: 'hidden',
    marginTop: 10
  },
  avatarImg: {
    width: '100%',
    height: 'auto',
    transform: 'translate3d(0,0,0)'
  },
  info: {
    paddingTop: 20
  },
  actions: {
    paddingTop: 24,
    textAlign: 'right'
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    marginRight: 10,
    marginTop: 10
  }
}

Profile.propTypes = {
  history: PropTypes.object.isRequired
}

Profile.contextTypes = {
  intl: PropTypes.object.isRequired
}

const mapStateToProps = ({ auth, people }) => ({ auth, people })

export default connect(mapStateToProps)(Profile)

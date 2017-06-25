
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Paper, TextField, Chip, FlatButton } from 'material-ui'

const languages = [
  'Syrian',
  'English'
]

const skills = [
  'Photoshp',
  'Foo',
  'Bar',
  'Baz'
]
class Profile extends Component {

  render () {

    const { intl: {messages}} = this.context

    return (
      <div style={styles.container}>
        <Paper
          zDepth={2}
          style={styles.paper}
        >
          <div style={styles.leftColumn}>
            <div style={styles.leftColumnInner}>
              <div style={styles.avatar}>
                <img style={styles.avatarImg} src='./assets/profilepic.png' />
              </div>
              <div style={styles.info}>
                Khuloud Maria
              </div>
              <div style={styles.info}>
                25/10/1989
              </div>
              <div style={styles.info}>
                Syria
              </div>
            </div>
          </div>

          <div style={styles.rightColumn}>
            <TextField
              floatingLabelText={messages['addProfile.textfield.experience.name']}
              fullWidth
              value='Modelo'
            />
            <TextField
              floatingLabelText={messages['addProfile.textfield.experience.date']}
              fullWidth
              value='25/10/2005'
            />
            <TextField
              floatingLabelText={messages['addProfile.textfield.experience.title']}
              fullWidth
              value='Top Model'
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
                {languages.map((lang, idx) =>
                  <Chip
                    style={styles.chip}
                    key={`language-${idx}`}
                  >{lang}</Chip>
                )}
              </div>
              <br />
              <span>{messages['addProfile.textfield.skills']}</span>
              <div style={styles.chipContainer}>
                {skills.map((skill, idx) =>
                  <Chip
                    style={styles.chip}
                    key={`language-${idx}`}
                  >{skill}</Chip>
                )}
              </div>
            </div>
            {
              this.props.auth.user.username == 'institution@test.com'?
                <div style={styles.actions}>
                  <FlatButton label={messages['profile.assign']} primary />
                  <FlatButton label={messages['profile.make']} secondary />
                </div>
                : ''
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

Profile.contextTypes = {
  intl: PropTypes.object.isRequired
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Profile)

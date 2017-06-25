
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper, TextField, DatePicker, RaisedButton, MenuItem, SelectField, Chip } from 'material-ui'
import { lightGreen500, pink500, white } from 'material-ui/styles/colors'

const countries = [
  'Iraque',
  'Syria',
  'Some place'
]

const createDelete = (fn, idx) => event => fn(idx)
const createNavigation = (fn, path, id) => event => fn(path, { id })

class AddProfile extends Component {
  state = {
    skills: [],
    languages: [],
    skillsValue: '',
    languageValue: '',
    selectedCountry: ''
  }

  _addSkill = (event) => {
    if (event.charCode === 13) {
      const { value } = event.target
      if (value.length) {
        const { skills } = this.state
        this.setState({ skills: [...skills, value], skillsValue: '' })
      }
    }
  }

  _skillValueChange = (event) => {
    const { value } = event.target
    this.setState({ skillsValue: value })
  }

  _removeSkill = (index) => {
    const { languages } = this.state
    this.setState({ skills: languages.filter((item, idx) => idx !== index) })
  }

  _addLanguage = (event) => {
    if (event.charCode === 13) {
      const { value } = event.target
      if (value.length) {
        const { languages } = this.state
        this.setState({ languages: [...languages, value], languageValue: '' })
      }
    }
  }

  _languageValueChange = (event) => {
    const { value } = event.target
    this.setState({ languageValue: value })
  }

  _removeLanguage = (index) => {
    const { languages } = this.state
    this.setState({ languages: languages.filter((item, idx) => idx !== index) })
  }

  _handleCountryChange = (e, k, value) => {
    this.setState({ selectedCountry: value })
  }

  render () {
    const { intl } = this.context
    const messages = intl.messages
    const { skills, languages, skillsValue, languageValue, selectedCountry } = this.state
    const { history } = this.props
    return (
      <div style={styles.container}>
        <Paper
          zDepth={2}
          style={styles.paper}
        >
          <h2 style={styles.title}>{messages['addProfile.paper.title']}</h2>
          <TextField
            floatingLabelText={messages['addProfile.textfield.name']}
            fullWidth
          />
          <div style={styles.row}>
            <DatePicker
              floatingLabelText={messages['addProfile.textfield.birthday']}
            />
            <SelectField
              floatingLabelText={messages['addProfile.textfield.country']}
              onChange={this._handleCountryChange}
              value={selectedCountry}
            >
              {
                countries.map((country, idx) =>
                  <MenuItem key={`country-${idx}`} value={country} primaryText={country} />
                )
              }
            </SelectField>
          </div>
          <TextField
            floatingLabelText={messages['addProfile.textfield.experience.name']}
            fullWidth
          />
          <div style={styles.row}>
            <DatePicker
              floatingLabelText={messages['addProfile.textfield.experience.date']}
            />
            <TextField
              floatingLabelText={messages['addProfile.textfield.experience.title']}
            />
          </div>
          <TextField
            floatingLabelText={messages['addProfile.textfield.experience.description']}
            multiLine
            fullWidth
          />
          <TextField
            name='languages'
            floatingLabelText={messages['addProfile.textfield.languages']}
            fullWidth
            value={languageValue}
            onChange={this._languageValueChange}
            onKeyPress={this._addLanguage}
          />
          <div style={styles.chipContainer}>
            {languages.map((language, idx) =>
              <Chip
                style={styles.chip}
                key={`language-${idx}`}
                onRequestDelete={createDelete(this._removeLanguage, idx)}
              >{language}</Chip>
            )}
          </div>
          <TextField
            name='skills'
            floatingLabelText={messages['addProfile.textfield.skills']}
            fullWidth
            value={skillsValue}
            onChange={this._skillValueChange}
            onKeyPress={this._addSkill}
          />
          <div style={styles.chipContainer}>
            {skills.map((skill, idx) =>
              <Chip
                style={styles.chip}
                key={`skill-${idx}`}
                onRequestDelete={createDelete(this._removeSkill, idx)}
              >{skill}</Chip>
            )}
          </div>
          <div style={styles.actions}>
            <RaisedButton
              label='add'
              backgroundColor={lightGreen500}
              labelColor={white}
              onClick={createNavigation(history.push, '/refugees/1', 1)}
            />
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
  title: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    padding: 24,
    margin: 0,
    color: white,
    backgroundColor: pink500,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  paper: {
    position: 'relative',
    width: 700,
    margin: '0 auto',
    padding: '24px 32px',
    paddingTop: 67
  },
  actions: {
    paddingTop: 16,
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

AddProfile.propTypes = {
  history: PropTypes.object.isRequired
}

AddProfile.contextTypes = {
  intl: PropTypes.object.isRequired
}

export default AddProfile

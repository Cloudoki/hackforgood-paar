
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper, TextField, DatePicker, RaisedButton, MenuItem, SelectField, Chip } from 'material-ui'
import { lightGreen500, white } from 'material-ui/styles/colors'

const countries = [
  'Iraque',
  'Syria',
  'Some place'
]

const createDelete = (fn, idx) => event => fn(idx)

class AddProfile extends Component {
  state = {
    skills: [],
    languages: [],
    skillsValue: '',
    languageValue: ''
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

  render () {
    const { intl } = this.context
    const messages = intl.messages
    const { skills, languages, skillsValue, languageValue } = this.state
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
            />
          </div>
        </Paper>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 20
  },
  title: {
    margin: 0
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  paper: {
    width: 700,
    margin: '0 auto',
    padding: '24px 32px'
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

AddProfile.contextTypes = {
  intl: PropTypes.object.isRequired
}

export default AddProfile
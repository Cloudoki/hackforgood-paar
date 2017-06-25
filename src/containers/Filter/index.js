
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AutoComplete from 'material-ui/AutoComplete'
import Chip from 'material-ui/Chip'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import { TextField, RaisedButton } from 'material-ui'

const colors = [
  'Lisbon',
  'Porto',
  'Braga',
  'Almada',
  'Faro',
  'Coimbra',
  'Evora',
  'Setubal'
]

const people = [
  { name: 'Brendan Lim', avatar: 'images/ok-128.jpg', skills: ['Carpintaria', 'Cozinheiro', 'foo'] },
  { name: 'Grace Ng', avatar: 'images/uxceo-128.jpg', skills: ['Carpintaria', 'Dança', 'Cozinheiro', 'foo'] },
  { name: 'Kerem Suer', avatar: 'images/kerem-128.jpg', skills: ['Cozinheiro', 'foo'] },
  { name: 'Eric Hoffman', avatar: 'images/kolage-128.jpg', skills: ['Cozinheiro', 'Empregado de mesa', 'foo'] },
  { name: 'Raquel Parrado', avatar: 'images/raquelromanp-128.jpg', skills: ['Carpinteiro', 'Empregado de mesa', 'foo'] }
]

const styles = {
  container: {
    paddingTop: 84,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  label: {
    marginRight: 30
  },
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row'
  },
  list: {
    width: 300,
    marginTop: 40
  },
  nextButton: {
    marginTop: 20,
    marginBottom: 50

  },
  skillsContainer: {
    maxWidth: 400
  }
}

let SelectableList = makeSelectable(List)

function wrapState (ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired
    };

    componentWillMount () {
      this.setState({
        selectedIndex: this.props.defaultValue
      })
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index
      })
    };

    render () {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      )
    }
  }
}

SelectableList = wrapState(SelectableList)

export default class Filter extends Component {
  state = {
    searchText: '',
    skills: [],
    skillsValue: ''
  };

  handleRequestDelete = (index) => {
    const { skills } = this.state.skills

    this.setState({ skills: skills.filter((item, idx) => idx !== index) })
  };

  renderChip (data, idx) {
    return (
      <Chip
        key={`skill-${idx}`}
        onRequestDelete={() => this.handleRequestDelete(idx)}
        style={styles.chip}
      >
        {data}
      </Chip>
    )
  }

  handleUpdateInput = (searchText) => {
    this.setState({ searchText })
  }

  addSkill = (event) => {
    if (event.charCode === 13) {
      const { value } = event.target
      if (value.length) {
        const { skills } = this.state
        this.setState({ skills: [...skills, value], skillsValue: '' })
      }
    }
  }

  skillValueChange = (event) => {
    const { value } = event.target
    this.setState({ skillsValue: value })
  }

  render () {
    const { searchText, skillsValue, skills } = this.state
    return (
      <div style={styles.container}>
        <div>
          <span style={styles.label}>Choose your location:</span>
          <AutoComplete
            hintText='Location'
            searchText={searchText}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.handleNewRequest}
            dataSource={colors}
            filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
            openOnFocus
            />
        </div>
        <div style={styles.skillsContainer}>
          <span style={styles.label}>Search for Skills: </span>
          <TextField
            floatingLabelText='Skills'
            onKeyPress={this.addSkill}
            onChange={this.skillValueChange}
            value={skillsValue}
          />
          <div style={styles.wrapper}>
            {skills.map(this.renderChip, this)}
          </div>
        </div>
        <div style={styles.list}>
          <SelectableList>
            <Subheader>Potential Candidates</Subheader>
            {people.map((person, idx) =>
              <ListItem
                value={person.name}
                primaryText={person.name}
                leftAvatar={<Avatar src={person.avatar} />}
              />
            )}
          </SelectableList>
        </div>
        <RaisedButton
          onClick={this.onButtonClick}
          label='Next'
          secondary
          style={styles.nextButton}
        />
      </div>

    )
  }
}

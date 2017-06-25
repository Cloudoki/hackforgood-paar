
import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

import PropTypes from 'prop-types';
// import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton'

const colors = [
  'Lisbon',
  'Porto',
  'Braga',
  'Almada',
  'Faro',
  'Coimbra',
  'Evora',
  'Setubal',
];

const styles = {
  container: {
    marginTop: 30,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    flexDirection: 'column',
  },
  label: {
    marginRight: 30
  },
  chip: {
        margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  row : {
    flexDirection: 'row',
  },
  list: {
    width: 300,
    // flex: 1,
    marginTop: 40,
  },
  nextButton: {
    marginTop: 20,

  }
}

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

export default class Filter extends Component {
  state = {
    searchText: '',
    chipData: [
      {key: 0, label: 'Angular'},
      {key: 1, label: 'JQuery'},
      {key: 2, label: 'Polymer'},
      {key: 3, label: 'ReactJS'},
    ]
  };


  handleRequestDelete = (key) => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
    // this.setState({
    //   searchText: '',
    // });
  };

  onButtonClick = () => {

  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <span style={styles.label}>Choose your location:</span>
          <AutoComplete
            hintText="Location"
            searchText={this.state.searchText}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.handleNewRequest}
            dataSource={colors}
            filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
            openOnFocus={true}
            />
        </div>
        <br />
        <div style={styles.row}>
          <span style={styles.label}>Skills</span>
          <div style={styles.wrapper}>
            {this.state.chipData.map(this.renderChip, this)}
          </div>
        </div>
        <div style={styles.list}>
          <SelectableList defaultValue={3}>
            <Subheader>Potential Candidates</Subheader>
            <ListItem
              value={1}
              primaryText="Brendan Lim"
              leftAvatar={<Avatar src="images/ok-128.jpg" />}
              nestedItems={[
                <ListItem
                  value={2}
                  primaryText="Grace Ng"
                  leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                  />,
              ]}
              />
            <ListItem
              value={3}
              primaryText="Kerem Suer"
              leftAvatar={<Avatar src="images/kerem-128.jpg" />}
              />
            <ListItem
              value={4}
              primaryText="Eric Hoffman"
              leftAvatar={<Avatar src="images/kolage-128.jpg" />}
              />
            <ListItem
              value={5}
              primaryText="Raquel Parrado"
              leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
              />
          </SelectableList>
        </div>
        <RaisedButton onClick={this.onButtonClick} label="Next" secondary={true} style={styles.nextButton} />
      </div>

    );
  }
}

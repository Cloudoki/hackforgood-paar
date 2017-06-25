
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GridList, GridTile, IconButton, Subheader } from 'material-ui'
import Eye from 'material-ui/svg-icons/image/remove-red-eye'

const createOnClick = (fn, path, id) => event => fn(path, id)

class HomePage extends Component {
  componentWillMount () {
    const { auth: { user }, history } = this.props

    if (user.email !== 'institution@test.com') {
      history.replace('/login')
    }
  }
  _navigate = (path, id) => {
    const { history } = this.props
    history.push(path, { id })
  }

  render () {
    const { people } = this.props
    console.log(people)
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>December</Subheader>
          {people.people.map((pep, idx) => (
            <GridTile
              key={idx}
              title={pep.name}
              subtitle={<span>by <b>{pep.country}</b></span>}
              actionIcon={<IconButton onClick={createOnClick(this._navigate, `/refugees/${pep.id}`, pep.id)}><Eye color='white' /></IconButton>}
            >
              <img src={pep.avatar} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
    paddingTop: 84
  },
  gridList: {
    width: 500
  }
}

const mapStateToProps = ({ auth, people }) => ({ auth, people })

export default connect(mapStateToProps)(HomePage)

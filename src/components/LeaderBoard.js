import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User'

function mapStateToProps({users}) {

  const usersByScore = Object.values(users).map(user => ({
    score: Object.keys(user.answers).length + user.questions.length,
    ...user
  })).sort((a,b) => b.score - a.score)

  return {
    users,
    usersByScore
  }
}

class LeaderBoard extends Component {

  render() {
    return (
      <div>
        <ul className='dashboard-list'>
          {this.props.usersByScore.map((user) => (
            <li key={user.id}>
              <User user={user}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(LeaderBoard)
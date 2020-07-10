import React, { Component } from 'react'

class User extends Component {
  
  render() {
    const { avatarURL, name, answers, questions } = this.props.user
    const answerd = Object.keys(answers).length
    
    return (
      <div className='user-card'>
        <div className='left-q'>
          <img
            src={avatarURL}
            alt=""
            className='bigavatar'/>
        </div>
        <div className='center-q'>
          <h3>{name}</h3>
          <hr  className='score-hr'/>
          <p>Answered Questions: {answerd}</p>
          <p>Created Questions: {questions.length}</p>
        </div>
        <div className='score'>
          <h3>Score</h3>
          <div className='score-circle'>
            {answerd + questions.length}
          </div>
        </div>
      </div>
    )
  }
}

export default User
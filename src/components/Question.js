import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { withRouter } from 'react-router-dom'

function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]

  return {
    authedUser,
    question: question
    ? formatQuestion(question, users[question.author], authedUser)
    : null
  }
}

class Question extends Component {
  
  toQuestionFull = (e, question, authedUser) => {
    e.preventDefault()
    this.props.history.push(`/question/${question.id}`) 
  }

  render() {
    const { question, authedUser } = this.props
    
    if ( question == null ) {
      return <p>This Question doesn't exist.</p>
    }
    
    const { name, avatar, options } = question
    const optionOneText = options.optionOne.text
    return (
      <div className='question'>
        <div className='left-q'>
          {name} asks
          <img
            src={avatar}
            alt=""
            className='bigavatar'/>
        </div>
        <div className='right-q'>
          <h3>Would you rather</h3>
          <div>{optionOneText} or ...</div>
          <button className='btn' onClick={(e) => this.toQuestionFull(e, question, authedUser)}>
            View Question
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Question))
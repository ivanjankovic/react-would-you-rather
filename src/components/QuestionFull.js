import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import FormRadio from './FormRadio'
import Results from './Results'
import { handleSaveAnswer } from '../actions/questions'
// import { Link, withRouter } from 'react-router-dom'

function mapStateToProps({authedUser, users, questions}, props) {
  const { id } = props.match.params
  const question = questions[id]

  return {
    authedUser,
    question: question
    ? formatQuestion(question, users[question.author], authedUser)
    : null
  }
}

class QuestionFull extends Component {
  
  handleAnswer = (e, selectedOption) => {
    e.preventDefault()
    console.log('Answeer Submited')
    const { dispatch, question, authedUser } = this.props
    console.log({
      id: question.id,
      authedUser,
      selectedOption
    })
    dispatch(handleSaveAnswer({
      qid: question.id,
      authedUser,
      answer: selectedOption
    }))
  }
  
  render() {
    const { question, authedUser } = this.props
    
    const { name, avatar, options, voted } = question

    return (
      <div>
        <h3 className='center'>Question</h3>
        <div className='question'>
          <div className='left-q'>
            { !voted ? `${name} asks` : `Asked by ${name}`}
            <img
              src={avatar}
              alt=""
              className='bigavatar'/>
          </div>
          <div className='right-qf'>
            { !voted
              ? <FormRadio options={options} handleAnswer={this.handleAnswer}/>
              : <Results options={options} authedUser={authedUser}/>
            }
          </div>
        </div>
      </div>
    )
  }
}

// export default withRouter(connect(mapStateToProps)(Tweet))
export default connect(mapStateToProps)(QuestionFull)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question'

function mapStateToProps({questions, users, authedUser}) {
  const questionIds = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp )

  const answeredQIds = Object.keys(users[authedUser].answers)
  const unansweredQIds = questionIds.filter(id => !answeredQIds.includes(id))

  return {
    questionIds,
    answeredQIds,
    unansweredQIds
  }
}

class Dashboard extends Component {

  state ={
    qids: this.props.unansweredQIds,
    clickedTab: 'U'
  }

  toggleQuestions = (e) => {
    e.preventDefault()

    const id = e.target.id
    const { answeredQIds, unansweredQIds } = this.props

    this.setState(() => ({
      qids: id === 'U'? unansweredQIds: answeredQIds,
      clickedTab: id
    }))
  }
  

  render() {
    
    return (
      <div>
        <div className='select'>
          <button
            className='btn-s'
            style={{ background: this.state.clickedTab === 'U'? 'lightgray': ''}}
            id={'U'} onClick={this.toggleQuestions}>
            Unanswered Questions
          </button>
          <button
            className='btn-s'
            style={{ background: this.state.clickedTab === 'A'? 'lightgray': ''}}
            id={'A'} onClick={this.toggleQuestions}>
            Answered Questions
          </button>
        </div>
        <ul className='dashboard-list'>
          {this.state.qids.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Dashboard)
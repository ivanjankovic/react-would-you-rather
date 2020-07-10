import React, { Component } from 'react'

class Results extends Component {
  
  render() {
    const {optionOne, optionTwo} = this.props.options
    const votesNumOne = optionOne.votes.length
    const votesNumTwo = optionTwo.votes.length
    const totalVotes = votesNumOne + votesNumTwo
    const votedOne = optionOne.votes.includes(this.props.authedUser)
  
    return (
      <div className='results-text'>
        <h3>Results</h3>
        <p style={{color: "green"}}>Would you rather {optionOne.text}?</p>
        <p className="split-para">{votesNumOne} {votesNumOne === 1? 'vote': 'votes'}
          <span className='span-center'>{Math.round(votesNumOne*100/totalVotes)}%</span>
          <span className='span-right'>{votedOne? 'Your vote': ''}</span>
        </p>
        <hr/>
        <p style={{color: "green"}}>Would you rather {optionTwo.text}?</p>
        <p className="split-para">{votesNumTwo} {votesNumTwo === 1? 'vote': 'votes'}
          <span className='span-center'>{Math.round(votesNumTwo*100/totalVotes)}%</span>
          <span className='span-right'>{votedOne? null: 'Your vote'}</span>
        </p>
      </div>
    );
  }
}

export default Results
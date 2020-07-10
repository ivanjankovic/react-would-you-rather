import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class QuestionNew extends Component {
  state = {
    textOne: '',
    textTwo: '',
    toHome: false,
  }

  handleChangeOne = (e) => {
    const textOne = e.target.value

    this.setState(() => ({
      textOne
    }))
  }

  handleChangeTwo = (e) => {
    const textTwo = e.target.value

    this.setState(() => ({
      textTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { textOne, textTwo } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddQuestion(textOne, textTwo, id))

    this.setState(() => ({
      textOne: '',
      textTwo: '',
      toHome: true,
    }))
  }

  render() {
    const { textOne, textTwo, toHome } = this.state

    if ( toHome === true ) {
      return <Redirect to='/' />
    }

    return (
      <div className='question-new'>
        <h3>Create New Question</h3>
        <h3 className='left-align'>Would you rather</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={textOne}
            onChange={this.handleChangeOne}
            className='textarea'
            maxLength={70}
          />
          <h5 className='left-align'>OR</h5>
          <textarea
            placeholder="What's happening?"
            value={textTwo}
            onChange={this.handleChangeTwo}
            className='textarea'
            maxLength={70}
          />
          <button
            className='btn-q-submit'
            type='submit'
            disabled={textOne === '' || textTwo === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(QuestionNew)
import React, { Component } from 'react'

class FormRadio extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      sellection: props.options.optionOne.text
    }

  }
  
  onRadioChange = (e) => {
    this.setState({
      sellection: e.target.value
    });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    let selectedOption = ''
    if (this.state.sellection === this.props.options.optionOne.text) {
      selectedOption = 'optionOne'
    } else {
      selectedOption = 'optionTwo'
    }
    this.props.handleAnswer(e, selectedOption)
  }
  
  render() {
    const { optionOne, optionTwo } = this.props.options
    
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>Would you rather</h3>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value={optionOne.text}
                  checked={this.state.sellection === optionOne.text}
                  onChange={this.onRadioChange}
                />
                <span>{optionOne.text} or ...</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value={optionTwo.text}
                  checked={this.state.sellection === optionTwo.text}
                  onChange={this.onRadioChange}
                />
                <span>{optionTwo.text}</span>
              </label>
            </li>

          </ul>
          <button type="submit" className='btn'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormRadio
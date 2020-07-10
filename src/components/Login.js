import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

function mapStateToProps({users, authedUser}) {
  return {
    authedUser,
    users,
    userIds: Object.keys(users)
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit =(event) =>  {
    event.preventDefault();

    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.value))
  }

  render() {
    const { users, userIds } = this.props
    
    return (
      this.props.authedUser
        ? <Redirect to='/' />
        : <form className='login-form' onSubmit={this.handleSubmit}>
            <label>
              <select
                className='login-select'
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="" disabled>Select User</option>
                {userIds.map(id => {
                  return <option value={id} key={id}>{users[id].name}</option>
                })}
              </select>
            </label>
            <p>
              <input type="submit" value="Sign in" disabled={!this.state.value}/>
            </p>
          </form>
    )
  }
}

export default connect(mapStateToProps)(Login)
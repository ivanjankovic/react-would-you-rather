import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

function mapStateToProps({authedUser,  users}) {
  return {
    authUserName: authedUser? users[authedUser].name : null
  }
}

class Nav extends Component {

  handleClick = () => {
    const { dispatch } = this.props

    if(this.props.authUserName) {
      dispatch(setAuthedUser(null))
    }
  }

  render()  {
    return (
      <div >
        <nav className='nav float-left'>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/new' activeClassName='active'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leader' activeClassName='active'>
                Leader Board
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className='nav float-right'>
          <ul >
            <div className='li-margin'>
              {this.props.authUserName}
            </div>
            <li>
              <NavLink
                to='/login'
                activeClassName='active'
                onClick={this.handleClick}>
                {this.props.authUserName? 'Logout': 'Login' }
              </NavLink>
            </li>
          </ul>
        </nav>
        <hr className='nav-hr'/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Nav)


import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import QuestionNew from './QuestionNew'
import QuestionFull from './QuestionFull'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'
import Login from './Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ height: '5px' }} updateTime={25} />
          <div className='container'>
            <Nav/>
            {this.props.authedUser
              ? <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/question/:id' exact component={QuestionFull} />
                <Route path='/new' exact component={QuestionNew} />
                <Route path='/leader' exact component={LeaderBoard} />
                <Route path='/login' exact component={Login} />
              </div>
              : <Login />}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
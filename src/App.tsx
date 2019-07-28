import React, { Component } from 'react'
import blockstack from 'blockstack'
import { Layout } from 'antd'

import { removeQueryParams, delay } from './helpers'
import Petitions from './components/petitions'
import BlockstackAuthCard from './components/blockstack-auth'
import BlockstackAuthCardSuccess from './components/blockstack-auth-success'

class App extends Component {
  userSession = new blockstack.UserSession()

  state = {
    signInPending: false
  }

  componentWillMount () {
    const session = this.userSession
    if (!session.isUserSignedIn() && session.isSignInPending()) {
      this.setState({ signInPending: true })
      // Ensure at least 2s delay so user can see msg
      Promise.all([session.handlePendingSignIn(), delay(2000)])
        .then(([userData]) => {
          this.setState({ signInPending: false })
          removeQueryParams()
          if (!userData.username) {
            throw new Error('This app requires a username.')
          }
        })
    }
  }

  render () {
    if (this.state.signInPending) {
      return (
        <BlockstackAuthCardSuccess />
      )
    }
    return (
      <Layout role="main">
        <Layout.Content className="app-container">
          {this.userSession.isUserSignedIn()
            ? <Petitions />
            : <BlockstackAuthCard />
          }
        </Layout.Content>
      </Layout>
    );
  }
}

export default App

import React from 'react'

import ToUnmount from './ToUnmount'

class App extends React.Component {
  state = {
    isMounted: true
  }

  toggleIsMounted = () => {
    this.setState((prevState) => ({
      isMounted: !prevState.isMounted
    }))
  }

  render () {
    return (
      <div>
        <button
          onClick={this.toggleIsMounted}
        >
          {this.state.isMounted ? 'UNmount' : 'Mount'}
        </button>
        { this.state.isMounted ?
          <ToUnmount />
          :
          null
        }
      </div>
    )
  }
}

export default App

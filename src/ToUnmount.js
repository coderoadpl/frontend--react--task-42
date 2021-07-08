import React from 'react'

class ToUnmount extends React.Component {
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    return (
      <div>
        ToUnmount
      </div>
    )
  }
}

export default ToUnmount

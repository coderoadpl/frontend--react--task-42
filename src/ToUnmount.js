import React from 'react'

class ToUnmount extends React.Component {
  intervalId = null

  componentDidMount () {
    console.log('componentDidMount')

    this.intervalId = setInterval(() => {
      console.log('interval')
      this.forceUpdate()
    }, 1000)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')

    // this it a good place to clear effects
    clearInterval(this.intervalId)
  }

  render () {
    return (
      <div>
        {(new Date()).toString()}
      </div>
    )
  }
}

export default ToUnmount

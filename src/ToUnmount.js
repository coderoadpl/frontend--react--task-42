import React from 'react'

class ToUnmount extends React.Component {
  intervalId = null

  state = {
    date: (new Date()).toString()
  }

  componentDidMount () {
    console.log('componentDidMount')

    this.intervalId = setInterval(
      () => {
        console.log('interval')
        this.setState(() => ({
          date: (new Date()).toString()
        }))
      },
      1000
    )
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')

    // this it a good place to clear effects
    clearInterval(this.intervalId)
  }

  render () {
    console.log('render')

    return (
      <div>
        {this.state.date}
      </div>
    )
  }
}

export default ToUnmount

import React from 'react'

class ToUnmount extends React.Component {
  state = {
    intervalId: null,
    date: (new Date()).toString()
  }

  componentDidMount () {
    console.log('componentDidMount')

    const intervalId = setInterval(
      () => {
        console.log('interval')
        this.setState(() => ({
          date: (new Date()).toString()
        }))
      },
      5000
    )

    this.setState(() => ({
      intervalId
    }))
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')

    // this it a good place to clear effects
    clearInterval(this.state.intervalId)
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

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      <div>
        <div>
        <button onClick={this.toggleHidden.bind(this)} >
          Click to show modal
        </button>
        {!this.state.isHidden && <Child />}
        </div>
            <div>
        <button onClick={this.toggleHidden.bind(this)} >
          Click to show modal2
        </button>
        {this.state.isHidden && <Child2 />}
        </div>
       
      </div>
    )
  }
}

const Child = () => (
<div className='modal'>
      Hello, World!
  </div>
    
)
const Child2 = () => (
<div className='modal'>
      Hello, World2!
  </div>
    
)
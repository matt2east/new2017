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



/////


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function ThirdOption(props) {
  return <h1>Third option.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn ==0) {
    return <UserGreeting />;
  }
  else if (isLoggedIn==1){
      return <GuestGreeting />;
      
  }
      else if (isLoggedIn==2){
      return <ThirdOption />;
      
  }
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={0} />,
  document.getElementById('root')
);
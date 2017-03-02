var React = require("react");

var NameField = React.createClass ({
    getInitialState(){
       return{value: ""};
    }, 
    clear: function(){
        this.setState({value: ""})
    },
    onChange: function(event){
        event.preventDefault()
        this.setState({
            value: event.target.value  
        });
        console.log("name is " + event.target.value)
        var nameString = event.target.value;
    },    
    render(){
        return(
            <div className="input-group">
                <input type="text" value={this.state.value} className="form-control" placeholder="Enter name" onChange={this.onChange}></input>
            </div>
       );
   }
})
module.exports = NameField


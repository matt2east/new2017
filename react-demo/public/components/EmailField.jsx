var React = require("react");
var validator = require("email-validator");

var EmailField = React.createClass ({
    getInitialState(){
       return{valid: true, value: ""};
    },
     clear: function(){
        this.setState({valid: true, value: ""})
    },
    onChange: function(event){
        event.preventDefault()
        this.setState({
        value: event.target.value  
});
        console.log("email is " + event.target.value)
        var emailString = event.target.value;
        if (validator.validate(emailString) == true)  
        {console.log(emailString + " is valid")};
        {document.getElementById("warning").innerHTML = ""};
        if (validator.validate(emailString) == false)  
        {document.getElementById("warning").innerHTML = "invalid email"};
            
},    
    render(){
        return(
            <div className="input-group">
                <input type="text" value={this.state.value} className="form-control" placeholder="Enter email" ref="email" onChange={this.onChange}></input>
            </div>
       );
   }
})
module.exports = EmailField

var React = require("react");
var NameField = require("./NameField");
var EmailField = require("./EmailField");
var validator = require("email-validator");
var LeadCapture = React.createClass (
    {
           Submitted: function(event){
                       event.preventDefault()
                       var name = this.refs.nameRef.state;
                       var email = this.refs.emailRef.state.valid;               
                       console.log(this.refs);
               if (email ==true){alert("Than you for submitting the form.")}
               this.refs.nameRef.clear();
               this.refs.emailRef.clear();
               
    }, 
        
    render(){
        return(
           <div>
                <form>
                    <h1>Please enter your name and email.</h1>
                    <div className="panel panel-default">
                    <NameField ref="nameRef"/>
                    <EmailField ref="emailRef"/>
                    <button onClick={this.Submitted}  type="submit" className="btn btn-primary" ref="name">Submit</button></div></form>
                <div id="warning"></div>    
            </div>
        );
},

});
module.exports = LeadCapture

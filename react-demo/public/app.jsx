var React = require("react");
var ReactDOM = require("react-dom");
var LeadCapture = require("./components/LeadCapture");

//var Program = React.createClass ({
//   getInitialState(){
//       return{
//           dessert: this.props.dessert,
//           beverage: this.props.beverage
//       };
//},
//getDefaultProps(){
//    return{
//        dessert:' something sweet',
//        beverage:' something cold'
//    };
//},
//handleNewUpdate: function (foodBeverage){
//    this.setState(foodBeverage);
//},
//render: function(){
//    return( <div>
//        <ProgramTextOutput dessert={this.state.dessert}beverage={this.state.beverage}/>
//        <ProgramForm onNewUpdate={this.handleNewUpdate}/>
//        </div>)
//    }
//});


ReactDOM.render(
    <div>
        <LeadCapture/>  
    </div>,
    document.getElementById('project')
);

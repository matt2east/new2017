'use strict';

console.log("app.js is running");

var userName = 'Fred';
var age = '3';
var nameLet = "Joe";
nameLet = "Bob";
//console.log(nameLet);
var fullName = 'Matthew Myers';
//const first, let if we need it, var never
//let firstName;

//const firstName2 = (y) => y.split(' ')[0];
//console.log("test " +firstName2(fullName));
//if (fullName){
//    const firstName = fullName.split(' ')[0];
//    console.log(firstName + " inside the scope");

//  console.log(firstName + " outside the scope");

//const getLastName = (newName) => newName.split(' ')[1];
//console.log(getLastName('Bob Smith'));

//
//const squareArrow = (x) => x*x;
//console.log("squareArrow is " +squareArrow(9));

//const mario = {
//    name: 'Mario',
//    job: 'Plumber',
//    items: ['mushroom', 'starman', 'fire flower'],
//powerUps: function() {
//   this.items.forEach((item) => {
//       console.log(this.name + " can use the " + item)
//   })
//} 
//  }
//mario.powerUps();

//const link = {
//    name: 'Link',
//    job: 'Legendary Hero',
//    items: ['sword', 'shield', 'bow', 'boomerang', 'bombs', 'ocarina'],
//    mapLink(){
//        return this.items.map((item) => this.name + ' can use the ' + item);
//    }
//};
//    console.log(link.mapLink())
//    console.log(link.name + " is a " + link.job)

//const numbers = [1,2,3,4,5,6,7,8,9];
//console.log(numbers.map(eachNumber => eachNumber *2));

//const nums = {
//    numbers: [1,2,3,4,5],
//    multiplyBy: [10],
//    multiply(){
//        return this.numbers.map((eachNumber) => eachNumber * this.multiplyBy);
//    }
//};
//console.log(nums.multiply())


// const user = {name:'Matthew', 
//            location: 'Texas',
//            age: 35
//           }
//function getLocation(location) {
//    if (location){return <div>Location: {location}</div>;}
//
//}

var app = {
    title: 'app',
    options: []
};
var tempNumbers = [12, 46, 666];

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
        console.log(app.options);
    }
};
var onFormRemoveSubmit = function onFormRemoveSubmit(e) {
    e.preventDefault();
    app.options = [];
    console.log(app.options);
};
var approot = document.getElementById("app");
var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options:' : 'No options.'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        app.options.map(function (option) {
            return React.createElement(
                'p',
                { key: option },
                ' Options: ',
                option
            );
        }),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'add option'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormRemoveSubmit },
            React.createElement(
                'button',
                { name: 'remove' },
                'remove all'
            )
        )
    );
    ReactDOM.render(template, approot);
};
renderApp();

//let count = 0;   
//const addOne = () => {
//    count++;
//    renderCounterApp()
//};   
//const minusOne = () => {
//    count--;
//    renderCounterApp()
//};  
//const reset = () => {
//    count = 0;
//    renderCounterApp()
//    
//};  
//
//const approot = document.getElementById("app");
//const renderCounterApp = () =>{
//    const templateTwo = (
//           <div>
//      <h1>Count: {count}</h1>
//      <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//        <button onClick={reset}>reset</button>
//      </div>
//    );
//    ReactDOM.render(templateTwo, approot);
//
//}
//renderCounterApp();

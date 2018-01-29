console.log("app.js is running");

const userName = 'Fred';
const age = '3';
let nameLet = "Joe";
nameLet = "Bob";
//console.log(nameLet);
const fullName = 'Matthew Myers';
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

const app = {
    title: 'app',
    options: [],
};
const tempNumbers = [12, 46, 666];

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
        console.log(app.options)
        
    }
};
const onFormRemoveSubmit = (e) => {
    app.options = [];
    console.log(app.options)
}
const approot = document.getElementById("app");
const renderApp = () =>{
   const template = 
    <div>
        <h1>{app.title}</h1>
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options.'}</p>
            <p>{app.options.length}</p>
   <ol>
    {
       app.options.map((option)=>{
           return <li key={option}> Options: {option}</li>;
       })
   }
   </ol>
 
        <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
          <button>add option</button>
        </form>
               <form onSubmit={onFormRemoveSubmit}>
    
          <button name="remove">remove all</button>
        </form>

            </div>; 
              ReactDOM.render(template, approot);  
}
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
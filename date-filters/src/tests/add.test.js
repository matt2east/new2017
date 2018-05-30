const add = (a,b) => (a+b);
const generateGreeting = (name ="Anon") => `Hello ${name}!`;

test('should add 2 numbers', ()=>{
  const result = add(3,4);
  expect (result).toBe(7);
});

test ('should return hello ___', ()=>{
  const greeting = generateGreeting("Matthew");
  expect (greeting).toBe("Hello Matthew!");
})

test ('no name', () => {
  const greetingAnon = generateGreeting();
  expect (greetingAnon).toBe("Hello Anon!")
})
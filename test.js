/* MIT unit testing Activity 

Here are the requirements: 

First, Write a function called Greet(name) that takes an argument called name, and returns a simple greeting message. For example, if the name is “Elizabeth” the function should return “Hello, Elizabeth”.
Next, handle null values by introducing a default. For example, when the name parameter is null, then the method should return the string “Hello there!”.
Next, add shouting. When “name” is all uppercase, then the method should shout back to the user. For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".
Next, Handle two names as input. If the name parameter is an array containing two names, then both names should be greeted. For example, if the input parameter is [‘Jose’,’Pep’], the method should return the string: “Hello, Jose, Pep”. 
Finally, Handle an arbitrary number of names as input. If the name parameter is an array of multiple names, all names must be greeted. For example, if the input parameter is [‘Alex’,’Arsene’,’Jose’,’Zidane’], the method should return the string: “Hello, Alex, Arsene, Jose, Zidane”

*/

const greet = require('./greet');

describe('test functions', ()=>{
    it("Must returns Hello Elizabeth", ()=>{
        expect(greet("Elizabeth")).toBe("Hello Elizabeth!");
    })

    it("When the name parameter is null, then the method should return the string 'Hello there!'", ()=>{
        expect(greet('')).toBe("Hello there!");
    })

    it("When “name” is all uppercase, then the method should shout back to the user.", ()=>{
        expect(greet('JOSE')).toBe("HELLO JOSE!");
    })

    it("if the input parameter is [´Jose´,´Pep´], the method should return the string ´Hello, Jose, Pep!", ()=>{
        expect(greet(['Jose','Pep'])).toBe("Hello, Jose, Pep!");
    })

    it("if the input parameter is [‘Alex’,’Arsene’,’Jose’,’Zidane’]"+
    "the method should return the string: “Hello, Alex, Arsene, Jose, Zidane”",() => {
        expect(greet(['Alex','Arsene','Jose','Sidane'])).toBe("Hello, Alex, Arsene, Jose, Sidane!");
    })

})
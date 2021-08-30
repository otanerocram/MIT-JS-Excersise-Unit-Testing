## MIT-JS-Excersise-Unit-Testing

Unit testing is the first level of application testing. As a developer, your focus should be on providing good unit testing to prevent any issues down the road. The more you progress in testing levels, the more expensive it becomes to solve application issues. Unit testing is the first line of defense to ensure an application is doing what it was designed to do. 

In this activity, we will walk you through a list of requirements for a function. Your task is to provide a list of possible Unit Tests that will cover these requirements. For each step in the listed requirements, create the unit tests that you believe will capture the specific requirement. 

You need to write the unit tests, and implement the function Greet() described below, then upload a screenshot of your work.  

### Here are the requirements: 

First, Write a function called Greet(name) that takes an argument called name, and returns a simple greeting message. For example, if the name is “Elizabeth” the function should return “Hello, Elizabeth”.

Next, handle null values by introducing a default. For example, when the name parameter is null, then the method should return the string “Hello there!”.

Next, add shouting. When “name” is all uppercase, then the method should shout back to the user. For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".

Next, Handle two names as input. If the name parameter is an array containing two names, then both names should be greeted. For example, if the input parameter is [‘Jose’,’Pep’], the method should return the string: “Hello, Jose, Pep”. 

Finally, Handle an arbitrary number of names as input. If the name parameter is an array of multiple names, all names must be greeted. For example, if the input parameter is [‘Alex’,’Arsene’,’Jose’,’Zidane’], the method should return the string: “Hello, Alex, Arsene, Jose, Zidane”

# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:

Researched answer: Object oriented programming is programming that uses classes of objects and functions (or methods) that work on them. The classes are the blueprint used to create specific objects. Functional programming is different in that Object oriented programming stores data in objects, which is not possible with functional programming. Functional programming takes data and transforms it by making functions. Essentially, the methods for storing and manipulating the data are different.
- Vanessa

2. What is the difference between a Float and an Integer in Ruby?


Your answer:

Researched answer:
Researched answer: I have used both integers and floats in my daily Ruby coding before. A time where I would choose to use integers is when I would like to find a remainder. For example, if I wanted to find the remainder of 3 divided by two. I would use the modulo operator represented by % and use it with the integers of 3 and 2 to write out as 3 % 2 which would output 1. By using integers, I know that the number I will receive as an output would also be a whole number. However, if I were to use a float, and do 3.0 % 2.0, I would actually receive the number 1.0 which would not produce the same output I would need for my method.
- Joyce

3. Ruby has an implicit return. What does that mean?

Your answer:

Researched answer: Implicit Return is an interesting feature that allows the developer to receive a final output without telling the function or expression to return a single thing. Ruby is one of the program that has this feature, where the last line of a method will automatically return a value without a return keyword.
This idea is slightly different to JavaScript's function, where a function needs to explicitly have a return to output a value. I have made the mistake before of forgetting a return keyword for a function, and that resulted in a undefined answer. This problem is nonexistent in Ruby, as aforementioned Ruby has access to implicit returns. 
- Jereme


4. What is a block in Ruby?

Your answer: Blocks are functions we pass into a method in order to get a value. The beginning keyword is do and ending is END. These are both needed. The different methods you will use within the function will need parameters that must be inside of pipes | | . For example an each method.
nums = [1,2,3]
nums.each do |num|
 p num * 5
end

Researched answer: Blocks are anonymous functions that we pass into a method to get a value. They are defined using an DO and END statement. I've learned that they can also be defined using curly braces { }. But this would be considered a single line definition, so its used for a single line code block. We use a DO/END for a multi-line code block. 
- Luis

5. What is an instance variable in Ruby?

Your answer:

Researched answer: The concept of an instance variable stems from the general concept of an instance in programming. When you create an instance of either a variable, object, or class, you are creating a copy of a blue print that is then filled with unique information. In the case of the instance variable, this is a name you give to that instantiated object. To utilize the information within the new variable instantiated, the variable can be called with dot notation to access one of its methods and or data. The @ symbol changes a local variable to an instance variable.
- Holden

## Looking Ahead: Terms for Next Week

1. PostgreSQL: DB management System, Potgres is the Database engine, SQL is the language

2. Ruby on Rails: Open source FrameWork for web dev. Quickly build Full-Stack web application

3. ORM: Object Relational Mapping: Converts data between incompatible systems using OOP languages. ORM allows a developer to work with databases as if it were a ruby object. Connects Ruby to the database. 

4. Active Record: Ruby on Rails - stores memory in different kinds of databases. AR is an ORM -- It can preform queries showing both data and logic.  

5. Migrations: Migrations is a tool to modify the shape of your database.

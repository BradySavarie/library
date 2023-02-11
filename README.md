<h1>📖 myLibrary</h1>

<h2>Track Your Book Collection Virtually!</h2>

<img width="1280" alt="Desktop Design" src="https://user-images.githubusercontent.com/106128212/218281081-38593a05-5032-45ec-b2ad-57086265f14d.png">

<i>This application accepts key information about your books such as title, author, pages, and read status and stores it in your own personal library. Books can be added and removed from the library at any point, and the read status can be dynamically adjusted via the Read button.</i>

Live Link: https://bradysavarie.github.io/library/

<hr>

I developed this application as part of The Odin Project's Javascript curriculum with the goal of improving my ability to work with objects. I made it a priority to create a fully responsive design without using any media queries to set hard breakpoints, and this was the first project of mine that I took a mobile-first approach.

<h3>What I Learned</h3>

Building this project gave me the opportunity to learn alot about modern CSS techniques such as mixing clamp functions with viewport units to achieve font-sizes that scale smoothly, using repeat functions with the auto-fit keyword and minmax limits to dynamically adjust the amount of columns in a grid system based on resolution, and styling more complicated components such as the Read Status checkbox that functions as an animated toggle switch.

Developing this application strenghtened my Javascript and general problem solving skills in many ways. I learned how to use the concepts of the prototype chain and prototypal inheritance to build constructor functions that create instances of objects containing the properties and values that I need. Studying the 'this' keyword and how its value is dependent on execution context and then applying that knowledge to constructing book objects ended up being a big lightbulb moment for me once. I also learned about event delegation and how the technique can be used to trigger global event handlers on dynamically created elements, thus improving performance by reducing the amount of active event listeners. Lastly, the mental gymnastics involved with iterating over arrays of objects, targeting specific properties, and then adjusting the values using conditionals was really beneficial in helping me learn how to think logically and organize my thoughts.

Side note: I configured ESlint (using the AirBnB style guide) and Prettier for this first time during this project to help identify any issues with my code and format it properly.

<h3>What I Would Do Differently</h3>

By the end of the project my styles.css file had become a hassle to manage. I suspect that the main problem is that I had written my css to be too dependent on my HTML, which meant that any updates to my index.html file would have to be matched in my styles.css file. I should have followed the BEM naming method to try and mitigate this, but I think I would have still found myself repeating <i>alot</i> of my code regardless. I need a better system to write my css so that it is reusable, and I think the next step i'm going to take to improve this is getting comfortable with a utility-first css framework like Tailwind. 

In retrospect I believe I should have also used the Object.create method to create instances of the book object. I've read that this is the preferred way to do things but i'll need to research some more on the pros and cons to fully understand why.

<h1>📖 myLibrary</h1>

<h2>Track Your Book Collection Virtually</h2>

<img width="1280" alt="Desktop Design" src="https://user-images.githubusercontent.com/106128212/218281081-38593a05-5032-45ec-b2ad-57086265f14d.png">

<i>This application accepts key information about your books such as title, author, pages, and read status and stores it in your own personal library. Books can be added and removed from the library at any point, and the read status can be toggled via the Read button.</i>

Live Link: https://bradysavarie.github.io/library/

<hr>

I developed this application as part of The Odin Project's Javascript curriculum with the goal of improving my ability to work with objects. I made it a priority to create a fully responsive design without using any media queries to set hard breakpoints, and this was the first project of mine that I took a mobile-first approach.

<h3>What I Learned</h3>

Building this project gave me the opportunity to learn alot about modern CSS techniques such as mixing clamp functions with viewport units to achieve font-sizes that scale smoothly, using repeat functions with the auto-fit keyword and minmax limits to dynamically adjust the amount of columns in a grid system based on resolution, and styling more complicated components such as the Read Status checkbox that functions as an animated toggle switch.

Developing this application strenghtened my Javascript and general problem solving skills in many ways. I learned how to write constructor functions and call them using the 'new' keyword to create instances of objects containing the properties and methods that I need via prototypal inheritance. Studying the 'this' keyword, learning how its value is dependent on execution context, and then applying that knowledge to constructing book objects ended up being a big lightbulb moment for me. I also learned about event delegation and how the technique can be used to trigger global event handlers on dynamically created elements, thus improving performance by reducing the amount of active event listeners on the page. Lastly, the mental gymnastics involved with iterating over arrays of objects, targeting specific properties, and then adjusting the values using conditionals was beneficial in improving my problem solving skills.

Side note: I configured ESlint (using the AirBnB style guide) and Prettier for the first time during this project to help identify issues with my code and format it properly.

<h3>What I Would Do Differently</h3>

By the end of the project my styles.css file had become difficult to manage. I suspect that the main problem is that I wrote my css to be too dependent on the HTML, which meant that any updates to my index.html file would have to be matched in my styles.css file, and I was repeating myself far too often. I should have followed the BEM naming method from the start of the project to avoid this problem. Overall though I think I need a better system to write my css so that it is reusable and easily maintained, and I think the next step i'm going to take towards improving this is getting comfortable with a utility-first css framework like Tailwind. I also should have started out with a reset such as normalize.css to help with cross-browser compatibility as I can now see that when opened on mobile the project renders slightly differently. 

I recognize as well that I need to commit my changes much more frequently. There were points in this project where I would code for hours without committing which is far from ideal. I'm going to focus on building up better version control habits on the next project.

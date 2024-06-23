This project is a web application developed with React and Redux, using the XKCD API to fetch and display random comics. Users can interact with the comics by rating them, allowing the user to choose previously read comic, and searching for specific comics by typing their number ID.

Running the Project:
To run the project locally, follow these steps:

1 .git clone https://github.com/daurquijo/comic-react.git

2. npm install

3. npm start

This will start a local server and open the application on your default web browser.

Interacting with the Application:
Once the application is running, you can:

Read a random comic: The application fetches a random comic from the XKCD API and display it's title, image, and number.
Rate the comic: Users can rate the comic using interactive elements provided below the comic.
Get a specific comic: Users can enter a specific XKCD comic number and the application will display it.
Access previous comics: You can access any previously read comic through the comic record list.
Search for a specific comic: In addition to displaying random and specific comic ID.

Building the Solution:
The solution was built using the following technologies and methodologies:

React and Redux: Used for the user interface and managing global state, respectively.
Jest: Employed for writing unit tests of key functions and components.
ESLint: Configured to maintain clean and consistent code.
HTML, CSS, and JavaScript: Used for the basic structure, styling, and functionality of the application.
XKCD API: Integrated to fetch and display comic data on the user interface.
Main Challenges Encountered:
Throughout development, significant challenges included:

Global State Management: Use of Redux to efficiently manage application state and ensure data consistency.
Integration with External API: Addressing CORS issues by setting up a proxy server and handling asynchronous requests.
Implementation of Complex Features: Development of features such as displaying previously shown comics and searching for specific comics by number.
Deployment Issues: Currently working on deploying the application properly for public access for the project submission date.

This README provides an overview of the Masiv Comic Test project, detailing how to run it locally, interact with it's features, and outlining it's construction using modern technologies like React, Redux, Jest, and integration with the XKCD API. For access to the full source code and further exploration of the project, please visit the repository.
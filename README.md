Welcome to The Limit Fitness project.

This is a project that aim to provide a workout planner to normal and vip users to follow exercises, rate their performance with or without a photo and they can even look at past workout history.

This is the front end of the application and it uses React.

In the Project directory, you can run:

create a .env file, and paste these line in it:

REACT_APP_RAPID_API_KEY=ee3632c55amsh1871b7ef5e15bb0p1bc756jsn703f0f787969
REACT_APP_SERVER_URL='http://localhost:3001'

npm start

Runs the application in the development mode.
Open http://localhost:3000 to view it in your browser.

Since the application uses a 3rd party API, there is a request limits for 30 requests per minutes, and 500 per month. So better not to request for many times all at once, especially for the Plans page. If in any case, the API gives a too many request error, you can wait a while before another try. If the problem continues, please contact our team.

If you don’t have the node_modules folder in the project, create a npm package with this command line you need to use for installation:
npm init

This enables you to add the necessary key packages for React:
npm i react react-dom react-scripts

We are using React Router, please use this command line to install it:
npm i react-router-dom

For the best view, please add these dependencies (React Bootstrap, React Icons, and React confetti):

npm install react-bootstrap bootstrap

npm install react-icons --save

npm install react-confetti

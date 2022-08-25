Welcome to The Limit Fitness project.

This is a project that aim to provide a workout planner to normal and vip users to follow exercises, rate their performance with or without a photo and they can even look at past workout history.

<img width="470" alt="image" src="https://user-images.githubusercontent.com/91690088/186695975-a5ab8bf0-01fb-4437-9eef-aed8ca0ab541.png">
Figure 1. Homepage.
<img width="471" alt="image" src="https://user-images.githubusercontent.com/91690088/186696051-15221d79-5a22-4358-ae59-7a09949eca1e.png">
Figure 2. About page in light mode.

<img width="470" alt="image" src="https://user-images.githubusercontent.com/91690088/186696103-4dccffd3-fcda-45b5-9701-10120d8e649b.png">
Figure 3. About page in dark mode.

<img width="468" alt="image" src="https://user-images.githubusercontent.com/91690088/186696151-b6fdf977-06eb-4e63-bdeb-dbb222938cba.png">
Figure 4. Gif shown for an exercise as a modal.

<img width="470" alt="image" src="https://user-images.githubusercontent.com/91690088/186696485-2f9a874e-93f2-4aad-98a3-e1abcdf3a47f.png">
Figure 5. Plan customization page for VIP users.

<img width="470" alt="image" src="https://user-images.githubusercontent.com/91690088/186696536-8505692b-06d7-4874-98a2-0e9785278efc.png">
Figure 6. Work out page.

<img width="470" alt="image" src="https://user-images.githubusercontent.com/91690088/186696736-46a967d5-e3f7-491e-9062-b2d001956664.png">
Figure 7. Timer for the break in-between exercises.

<img width="470" alt="image" src="https://user-images.githubusercontent.com/91690088/186696779-d098b91a-08b2-43d4-bb6b-0eff347a4c86.png">
Figure 8. options to adjust the weight based on performance.

<img width="470" alt="image" src="https://user-images.githubusercontent.com/91690088/186696842-0e9cd5cc-fa2b-48ec-bdb0-795570ca5617.png">
Figure 9. reuse a plan from history.

<img width="463" alt="image" src="https://user-images.githubusercontent.com/91690088/186696909-d32798a2-c301-4e62-b748-8652a8ceecd2.png">
Figure 10. Predefined plan page for both normal and VIP user.

<img width="453" alt="image" src="https://user-images.githubusercontent.com/91690088/186696961-e283d88a-5f1b-4cf0-8c25-d4d0801c8065.png">
Figure 11. Post Workout Page.

<img width="458" alt="image" src="https://user-images.githubusercontent.com/91690088/186697022-55c5ddf9-585b-4774-b5f2-d543828b9c5e.png">
Figure 12. Display Workout History Page.



FUNCTIONAL REQUIREMENTS
1. Userscanswitchbetweenlight/darkmodefortheapplicationbyclickingabuttonand the theme will be applied for the whole application.
2. There are 2 levels of users: normal user and VIP user.
3. All users can access the About Us page for information about the gym.
4. UserscansignupforaregularorVIPaccountiftheyhaven’thadonebyclickingona link directing them to a page with a registration form. They can log in if they have an account already.
5. After logging in, the normal user will see the web page with 3 predefined workout plans: beginner, intermediate, and expert level that they can select.
6. Whenthenormaluserchoosesaplan,theywillbeledtoapagewheretheycanedit the weight, repetitions and sets or they can start their workout.
7. IfanormaluserwantstoupgradetoVIPuser,thereisabuttonintheNavbarwhich will navigate him or her to an upgrade page.
8. The VIP user will have access to not only the 3 predefined workout plans, but also able to create his or her own personalized plan.
9. Whencreatingownpersonalizedplan,usercanchooseexercisesbymusclegroupfrom our exercise library, and adjust the weight, rep, set details.
10. Once the user starts the workout, there will be a detailed description about the exercise, the left side shows the workout plan list for the day, with the on doing exercise highlighted.
11. User clicks done button each time after he or she finishes the set.
12. A timer will show up during the break time, the next set of exercise will automatically start after the break time ends.
13. Once the user is done with their workout, they will be able to choose a predefined comment to evaluate their performance, upload a photo and they will save them in their history.
14. The user can see their own work out history. They will see when the workout was done, the comment and their uploaded photo.
15. Users will be able to choose a past work out plan, adjust it if needed and reuse it for today’s workout. When reuse the plan, it will give user an option to adjust the weight automatically depending on the comment last time. For instance, if the user commented “too easy”, there will be a pop-up saying, “Do you want to change the weight up 10% this time?”. If the user chooses yes, it’s going to apply automatically for today’s plan. If the user chooses no, it will stay the same as last time.
16. Users are also able to see the details (list of exercises with their respective weight, repetitions, and sets) for that workout history.


TECHNICAL REQUIREMENTS

• Must be a transactional web application (take many forms, including registrations, sign-in, log-in, select exercise option etc.)

• Using React front-end

• Using Form text input

• Must perform validation of input

• Must handle errors properly (fail gracefully)

• The application should not crash

• The user should be able to perform all interactions with the application by visiting a home page and then navigating appropriately within the website.

• The website must have an "About Us" that describes your team and the motivation for the website.

• Must get, display and manipulate data

• 3rd party API or CRUD backend for core domain data

• CRUD for user database

• Must use props & state appropriately

• User must interact with data and site must respond to user actions appropriately

• items to playlist or cart, sort items, filter items, tag items

• Must have a Dark mode/Light mode


SOFT REQUIREMENT

• Must be appealing (i.e., a good aesthetic)

• Decent color scheme, intentional UI design philosophy, images

• Must be usable

• Well laid out, obvious operations, user-friendly interface

• Clear input directions, Understandable navigation

• Must be focused

• No extraneous, distracting content



This is the front end of the application and it uses React.

In the Project directory, 

create a .env file, and paste these line in it:

REACT_APP_RAPID_API_KEY=ee3632c55amsh1871b7ef5e15bb0p1bc756jsn703f0f787969
REACT_APP_SERVER_URL='http://localhost:3001'

Then you can run:

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

npm install --save styled-components

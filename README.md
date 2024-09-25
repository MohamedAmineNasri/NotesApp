# ThoughtStream

**ThoughtStream** is a web platform that allows users to submit both public and private messages, drawing inspiration from "The Unsent Project." It features user authentication, enabling logged-in users to manage their private notes, while also allowing anonymous submissions without requiring login.

## Key Features

- **Public and Private Messages**: Users can submit anonymous public messages or log in to manage private notes.
- **User Authentication**: The platform supports user registration and login, allowing authenticated users to access personalized features.
- **Responsive Navigation**: The navbar dynamically updates, showing features like the dashboard link only for logged-in users.
- **Tagging System**: Users can tag their messages to categorize or highlight content.
- **Mobile Responsive**: The design is optimized for both desktop and mobile experiences.

## Technologies Used

- **MERN Stack**: MongoDB, Express.js, React.js, Node.js
- **Styling**: Tailwind CSS

## Screenshots

- **Add New Note**:

  - This screenshot displays the page where logged-in users can create and save a new private note. Users can add tags to categorize their notes.
    ![AddNewNote](/FrontEnd/public/AddNewNote.png)

- **Landing Page & Anonymous Messages**:

  - The landing page showcases anonymous messages submitted by users without needing to log in. It highlights a clean interface for browsing public notes.
    ![LandingPageAndAnonymousMessage](/FrontEnd/public/LandingPageAndAnonymousMessage.png)

- **Login Page**:

  - This is the login interface where users can enter their credentials to access their private notes and other features exclusive to authenticated users.
    ![LoginPage](/FrontEnd/public/LoginPage.png)

- **Signup Page**:

  - The signup page allows new users to register by providing their details and creating an account to access private note-taking features.
    ![SignupPage](/FrontEnd/public/SignupPage.png)

- **User Dashboard**:

  - After logging in, users can see this dashboard page where all their private notes are listed, allowing them to manage, edit, and delete their notes.
    ![UserDashboard](/FrontEnd/public/UserDashboard.png)

- **Submit Message Page**:

  - This page allows users to submit an anonymous public message or a private note. It includes a form where users can input their message and relevant tags.
    ![SubmitMsgPage](/FrontEnd/public/SubmitMsgPage.png)

- **Mobile Dashboard Page**:

  - The mobile version of the user dashboard, optimized for smaller screens, allows users to view and manage their private notes on the go.
    ![MobileDashboardPage](/FrontEnd/public/MobileDashboardPage.png)

- **Mobile Landing Page**:
  - The mobile version of the landing page is optimized for a seamless experience on smartphones, allowing users to browse anonymous public messages.
    ![MobileLandingPage](/FrontEnd/public/MobileLandingPage.png)

## Setup Instructions

1. Navigate to the `FrontEnd` folder:

   ```bash
   cd FrontEnd
   npm i
   npm start dev

   ```

2. Navigate to the `Backend` folder:
   ```bash
   cd BackEnd
   npm i
   npm start
   ```

With ThoughtStream, users can express their thoughts both privately and publicly, providing an intuitive and seamless platform for message sharing.

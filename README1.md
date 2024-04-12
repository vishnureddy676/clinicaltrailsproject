# Clinical Trial Participant Manager

This is an **incomplete** web application for managing participants in clinical trials. The application currently has basic functionality for viewing a list of participants and their details. Your task is to enhance the application by adding new features, improving the user interface, and deploying it to a production environment.

## Project Overview

The application consists of a frontend built with HTML, CSS, and JavaScript, and a backend built with Node.js and Express. The data is stored in a SQLite database.

### Current Functionality

1. **Landing Page (`index.html`)**
2. **Participant Listing Page(`participant-list.html`)**: Displays a list of all participants in the clinical trial.
2. **Participant Detail Page (`participant-detail.html`)**: Shows the details of a selected participant, including their contact information and trial status.

### Enhancements Required

1. **Create Participant**: Implement a form to add a new participant to the clinical trial.
2. **Update Participant**: Implement a form to modify the details of an existing participant.
3. **Delete Participant**: Add functionality to remove a participant from the clinical trial.
4. **Trial Management Page**: Create a new page (`trial-management.html`) to display a list of all clinical trials. 
5. **User Interface Improvements**:
   - Enhance the overall layout and styling of the application using CSS.
   - Choose appropriate color schemes, fonts, icons and spacing for a professional look and feel.
   - Improve the folder structure and organization of the codebase where you see fit. 
6. **Code Structure and Best Practices**:
   - Follow best practices for code organization and modularity.
   - Implement proper code abstraction and separation of concerns.
   - Make sure that the appropriate error handling structures are in place. 
   - Use consistent naming conventions and code formatting.
   - Write clean, readable, and maintainable code.
7. **Development Environment Setup**
   - Set up your development environment for quick coding and testing. Use tools like Nodemon to automatically restart the server on code changes.
   - Avoid hardcoding values like port numbers. Use environment variables to store configuration settings.
7. **Dockerization**: Containerize the application using Docker to facilitate deployment.
8. **Deployment**: Deploy the application to the "own3" server.

> Note: The enhancements listed above are open-ended. While the required functionality must be achieved, you have the freedom to decide how to implement it based on your own judgment and coding practices.

## Getting Started

1. Clone the repository: `git clone https://github.com/aganitha/training.git`
2. Navigate to the project directory: `cd training/mini-project`
3. Install the required dependencies in the backend/database and backend/server folders: `npm install`
4. Start the api dev server by navigating to backend/server: `node app.js`
5. For quick frontend development and testing, you can use the Live Server extension in Visual Studio Code to view your HTML files. However, feel free to use any other development tools you prefer.


## Database Schema

The application uses a SQLite database with the following schema:

1. **Participants Table**:
   - `id` (Primary Key)
   - `name`
   - `email`
   - `phone`
   - `address`
   - `trialStatus` (e.g., 'enrolled', 'completed', 'dropped')

2. **Trials Table**:
   - `id` (Primary Key)
   - `name`
   - `description`
   - `startDate`
   - `endDate`

3. **ParticipantTrials Table** (Joining table for many-to-many relationship):
   - `id` (Primary Key)
   - `participantId` (Foreign Key referencing `Participants.id`)
   - `trialId` (Foreign Key referencing `Trials.id`)



## Submission

Once you have completed all the enhancements and deployments, please submit your work by sharing the url where your application is hosted. 

Good luck!
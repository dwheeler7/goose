# Project Plan

## Pre-Development Phase (1st Day)

**March 9: Setup and Planning**
- Initial setup and planning phase.
- Team meeting to define roles and tasks.

## Development Phase I: Building Core Features

**March 10-13: User Authentication, User Profile, and Project Portfolio Management**
- Implement JWT authentication for user login and registration.
- Develop functionalities for users to create, update, and display profiles and portfolio projects.

**March 14-16: Social Feature Implementation, Employer Profile**
- Add abilities to like, comment, follow users, and save projects.
- Develop special views and functionalities for employer profiles.

**March 17-20: Advanced Features (Search & API Pull)**
- Implement advanced search functionalities.
- Integrate third-party APIs as required.

## Styling & Organization Phase: Integrating Design with Functional Components

**March 19-23: Begin Styling Integration**
- Focus on applying consistent styling across the application.
- Enhance user interfaces based on usability principles.

**March 20: Component, Pages, & Files Review**
- Ensure all necessary components, pages, and files are in place.

**March 20: Comprehensive README File**
- Write out a comprehensive README file detailing project setup, usage, and contribution guidelines.

**March 23: Finalize Styling Efforts and Deployment**
- Resolve any design and functionality discrepancies.
- DEPLOY the application.

## Testing & Refinements Phase

**March 20-24: Thorough Testing**
- Conduct thorough testing for all features, including UI/UX testing.
- Identify any design or functional bugs.

**March 24-25: Finalize Fixes**
- Address and fix any issues identified during testing.
- Coordinate between developers and designers for necessary adjustments.

## March 26: Final Preparations

- Conduct a final group review of the project to ensure all components work seamlessly.
- Prepare for the project presentation, ensuring all documentation is ready and the project is fully deployed.

## Presentation Day

**March 27: Presentation and Demonstration**

- Present the project, emphasizing the collaborative effort between functionality and design.
- Showcase the application's features with a focus on the enhanced user experience.
- Explain the motivation behind the app and encourage classmates to sign up.

# API Documentation

## Users

### Create User

Create a new user.

- **Request**
  - Method: `POST`
  - Endpoint: `/api/users`
  - Headers: None
  - Body:
    - `name` (required): Name of the user
    - `email` (required): Email address of the user
    - `password` (required): Password for the user
    - `userType` (optional): Type of user (developer or employer)
    - `picture` (optional): URL to the user's profile picture

- **Response**
  - Status Code: `200 OK`
  - Body: JSON object containing the newly created user and authentication token
  - Example:
    ```json
    {
      "user": {
        "_id": "65f50499a42ef6a2b817768d",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "userType": "developer",
        "picture": "https://example.com/profile.jpg",
        "createdAt": "2024-03-10T12:00:00.000Z",
        "updatedAt": "2024-03-10T12:00:00.000Z"
      },
      "token": "<authentication_token>"
    }
    ```

### User Login

Authenticate an existing user.

- **Request**
  - Method: `POST`
  - Endpoint: `/api/users/login`
  - Headers: None
  - Body:
    - `email` (required): Email address of the user
    - `password` (required): Password for the user
    - `rememberMe` (optional): Boolean indicating whether to remember the user's session

- **Response**
  - Status Code: `200 OK`
  - Body: JSON object containing the authenticated user and authentication token (same format as the "Create User" response)

### Get User Profile

Retrieve user profile information by ID.

- **Request**
  - Method: `GET`
  - Endpoint: `/api/users/:id`
  - Headers: None
  - Parameters:
    - `id` (required): ID of the user

- **Response**
  - Status Code: `200 OK`
  - Body: JSON object containing the user profile information
  - Example:
    ```json
    {
      "_id": "65f50499a42ef6a2b817768d",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "userType": "developer",
      "picture": "https://example.com/profile.jpg",
      "createdAt": "2024-03-10T12:00:00.000Z",
      "updatedAt": "2024-03-10T12:00:00.000Z"
    }
    ```

### Update User Profile

Update user profile information.

- **Request**
  - Method: `PUT`
  - Endpoint: `/api/users/:id`
  - Headers: None
  - Parameters:
    - `id` (required): ID of the user
  - Body (fields to update):
    - `name`: New name of the user
    - `email`: New email address of the user
    - `password`: New password for the user
    - `userType`: New type of user (developer or employer)
    - `picture`: New URL to the user's profile picture

- **Response**
  - Status Code: `200 OK`
  - Body: JSON object containing the updated user profile information
  - Example:
    ```json
    {
      "_id": "65f50499a42ef6a2b817768d",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "userType": "employer",
      "picture": "https://example.com/new-profile.jpg",
      "createdAt": "2024-03-10T12:00:00.000Z",
      "updatedAt": "2024-03-11T08:00:00.000Z"
    }
    ```

### Check Token

Check the validity of the authentication token.

- **Request**
  - Method: `GET`
  - Endpoint: `/api/users/check-token`
  - Headers:
    - `Authorization`: Bearer token

- **Response**
  - Status Code: `200 OK`
  - Body: JSON object with a message indicating the token is valid
  - Example:
    ```json
    {
      "message": "Token is valid"
    }
    ```

## Posts

### Create Post

Create a new post.

- **Request**
  - Method: `POST`
  - Endpoint: `/api/posts`
  - Headers:
    - Authorization: Bearer {token}
  - Body:
    - `githubLink` (required): Link to the GitHub repository
    - `content` (required): Content of the post
    - `projectTitle` (required): Title of the project
    - `projectDescription` (required): Description of the project
    - `image` (required): URL of an image related to the project

- **Response**
  - Status Code: `201 Created`
  - Body: JSON object containing the newly created post
  - Example:
    ```json
    {
        "_id": "<Post_ID>",
        "user": "<User_ID>",
        "githubLink": "<GitHub_Link>",
        "content": "<Post_Content>",
        "projectTitle": "<Project_Title>",
        "projectDescription": "<Project_Description>",
        "image": "<Image_URL>",
        "likes": [],
        "comments": [],
        "createdAt": "<Creation_Date>",
        "updatedAt": "<Update_Date>",
        "__v": 0
    }
    ```

### Get All Posts

Retrieve all posts.

- **Request**
  - Method: `GET`
  - Endpoint: `/api/posts`
  - Headers: None

- **Response**
  - Status Code: `200 OK`
  - Body: JSON array containing all posts
  - Example:
    ```json
    [
        {
            "_id": "<Post_ID_1>",
            "user": "<User_ID_1>",
            "githubLink": "<GitHub_Link_1>",
            "content": "<Post_Content_1>",
            "projectTitle": "<Project_Title_1>",
            "projectDescription": "<Project_Description_1>",
            "image": "<Image_URL_1>",
            "likes": [],
            "comments": [],
            "createdAt": "<Creation_Date_1>",
            "updatedAt": "<Update_Date_1>",
            "__v": 0
        },
        {
            "_id": "<Post_ID_2>",
            "user": "<User_ID_2>",
            "githubLink": "<GitHub_Link_2>",
            "content": "<Post_Content_2>",
            "projectTitle": "<Project_Title_2>",
            "projectDescription": "<Project_Description_2>",
            "image": "<Image_URL_2>",
            "likes": [],
            "comments": [],
            "createdAt": "<Creation_Date_2>",
            "updatedAt": "<Update_Date_2>",
            "__v": 0
        },
    ]
    ```

### Get Post by ID

Retrieve a specific post by its ID.

- **Request**
  - Method: `GET`
  - Endpoint: `/api/posts/:id`
  - Headers: None
  - Parameters:
    - `id` (required): ID of the post

- **Response**
  - Status Code: `200 OK`
  - Body: JSON object containing the post with the specified ID (same format as the "Create Post" response)

### Update Post

Update an existing post.

- **Request**
  - Method: `PUT`
  - Endpoint: `/api/posts/:id`
  - Headers:
    - Authorization: Bearer {token}
  - Parameters:
    - `id` (required): ID of the post to update
  - Body (fields to update):
    - Any of the fields mentioned in the "Create Post" request body

- **Response**
  - Status Code: `200 OK`
  - Body: JSON object containing the updated post (same format as the "Create Post" response)

### Delete Post

Delete an existing post.

- **Request**
  - Method: `DELETE`
  - Endpoint: `/api/posts/:id`
  - Headers:
    - Authorization: Bearer {token}
  - Parameters:
    - `id` (required): ID of the post to delete

- **Response**
  - Status Code: `200 OK`
  - Body: JSON object containing the deleted post (same format as the "Create Post" response)

### Like Post

Like a post.

- **Request**
  - Method: `POST`
  - Endpoint: `/api/posts/:id/like`
  - Headers:
    - Authorization: Bearer {token}
  - Parameters:
    - `id` (required): ID of the post to like

- **Response**
  - Status Code: `200 OK`
  - Body: JSON object containing the updated post with the user's like added

### Unlike Post

Remove a like from a post.

- **Request**
  - Method: `POST`
  - Endpoint: `/api/posts/:id/unlike`
  - Headers:
    - Authorization: Bearer {token}
  - Parameters:
    - `id` (required): ID of the post to unlike

- **Response**
  - Status Code: `200 OK`
  - Body: JSON object containing the updated post with the user's like removed
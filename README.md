# Creatorverse

Creatorverse is a React-based application that allows users to manage their favorite content creators. Users can add, view, edit, and delete creators, with each creator having a name, URL, description, and an optional image.

## Features

- [x] Use a logical component structure in React to create the frontend of the app
- [x] Display at least five content creators on the homepage of the app
- [x] Each content creator item includes:
  - [x] their name
  - [x] a link to their channel or page
  - [x] a short description of their content
- [x] API calls use the async/await design pattern via Axios or fetch
- [x] Clicking on a content creator item takes the user to their details page, which includes their name, url, and description
- [x] Each content creator has their own unique URL
- [x] The user can edit a content creator to change their name, url, or description
- [x] The user can delete a content creator
- [x] The user can add a new content creator by entering a name, url, and description
  - [x] The new content creator then appears in the displayed list

## Installation

1. Clone the repository:

   `git clone https://github.com/GreatOlu/creatorverse.git`

2. Navigate to the project directory:

   `cd creatorverse`

3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

## Supabase Setup:

- Create a Supabase project.
- Set up a table named creators with columns name, url, description, and imageURL.
- Copy your Supabase project URL and API key into client.js.
- Ensure your client.js is correctly configured with your Supabase project URL and API key.

## Walkthrough

![Creatorverse video walkthrough](/creatorverse/crv.gif)

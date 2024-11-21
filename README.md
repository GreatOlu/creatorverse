# creatorverse

creatorverse is a react-based application that allows users to manage their favorite content creators. users can add, view, edit, and delete creators, with each creator having a name, url, description, and an optional image.

## features

- [x] use a logical component structure in react to create the frontend of the app
- [x] display at least five content creators on the homepage of the app
- [x] each content creator item includes:
  - [x] their name
  - [x] a link to their channel or page
  - [x] a short description of their content
- [x] api calls use the async/await design pattern via axios or fetch
- [x] clicking on a content creator item takes the user to their details page, which includes their name, url, and description
- [x] each content creator has their own unique url
- [x] the user can edit a content creator to change their name, url, or description
- [x] the user can delete a content creator
- [x] the user can add a new content creator by entering a name, url, and description
  - [x] the new content creator then appears in the displayed list

## installation

1. clone the repository:

   `git clone https://github.com/greatolu/creatorverse.git`

2. navigate to the project directory:

   `cd creatorverse`

3. install dependencies:

   `npm install`

4. start the development server:

   `npm run dev`

## supabase setup:

- create a supabase project.
- set up a table named creators with columns name, url, description, and imageurl.
- copy your supabase project url and api key into client.js.
- ensure your client.js is correctly configured with your supabase project url and api key.

## walkthrough

![creatorverse video walkthrough](/creatorverse/crv.gif)

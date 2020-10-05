# Pinpo technical interview

**Read carefuly this README to fully understand the context and the purpose of this test.**

## Context

The marketing squad of the Pinpo team want to create a blog. _Primarily to share
existing posts links_ throughout their social media campain **starting next
week**, then to _create new ones_. They already created ~600 posts, but some of
them are very old and need either heavy modifications or archiving.

One of your colleagues already worked on the server, created a Mongo database
and imported the 600 existing posts.
Another one just setup a React codebase on the client app.

Last week our awesome designer worked on some sketches to help you figure out
the way the new blog will look like. He gave you the following
[link](https://www.figma.com/file/IHVW03ofYWDzRU1b6ih5pX?node-id=1907-2851).

It is now your turn: you have 3 hours this week to work on the project (next
week, another colleague may work on it).

You are free to implement any valuable feature that will help the marketing team
to achieve their goals.

> For the purpose of the exercise we voluntary ignore user account and access
> rights.

Our goal for this week is to deploy a **first usable version** of the app.
The CTO wants the team to find a good balance between features delivery and
technical debt management. You'll need to share your vision on what should be
done next with the rest of the team.

Due to some technical difficulties, our API is having routing limitations, and
unfortunately we can't do more than 10 requests per second on any given
endpoint. The marketing team informed us that during social media campains,
there can be a lot of user opening links at the same time.

## To wrap it up

- The test duration is **3 hours, +/- 30 minutes**.
- **You can update any file, folder or configuration at will.**
- Figma files are available
  [here](https://www.figma.com/file/IHVW03ofYWDzRU1b6ih5pX?node-id=1907-2851).
- The database to use have the following URI:
  **mongodb+srv://server:LNbTHNd9xoLY8VQ2@tech-interview.pfiqk.mongodb.net/tech-interview?retryWrites=true&w=majority**

## What we expect in the Pull Request

Start by forking the
[Pinpo Technical Interview](https://github.com/PINPODEV/pinpo-tech-interview)
repository.

After this test is completed, make a new Pull Request to the
[repository](https://github.com/PINPODEV/pinpo-tech-interview) as you would have
done for a colleague to review your work (even if there's too much features for a single
Pull Request, we will ignore it for this test).

- You should share about the work done and what needs to be done next: your colleague will
  continue the development based on this information.
- You'll need to explain your choices (i.e. your prioritization).
- The server and client must run without errors.

## Commands

First we will need to install common dependencies, by running `yarn install` in the root of the project.
Then run `yarn setup` in the root of the project to install dependencies of `server` and `client`.
To start the server and the client, we need to run `yarn start` from the root of the project. It will start both the client and the server.
Once both apps are running, we will access the client app that should be available at http://localhost:3000.
The server app should be available at http://localhost:8080.

(You can also run the apps independently by running `yarn start` in each directory).

## Pinpo Posts Management API

You'll find here information that your colleagues leaved to you.

**MongoDB database URI:** mongodb+srv://server:LNbTHNd9xoLY8VQ2@tech-interview.pfiqk.mongodb.net/tech-interview?retryWrites=true&w=majority

### Endpoints

Those endpoints have been created by your fellow developer:

- `GET api/posts` Get all posts.
- `GET api/posts/:id` Get a post by ID.
- `POST api/posts` Create a post and returns it with a 201 status.
- `PUT api/posts/:id` Update a post and returns it with a 204 status.

You can create new ones if needed.

### Schema

**Post**

```
{
	_id: objectId!,
	title: string!,
	content: string!,
	author: string!,
	isArchived: boolean!,
	createdAt: string! (ISO date) // Represents the publication date
}
```

# CC2a Fullstack Backend Demo

This repository contains a demo backend that can be expanded for your CC2a Full Stack Task. Initially, the backend simply responds "Hello World" when it receives a GET request.

In the workshop, we will see how to:

1. Obtain this data from a frontend web
2. Store assets in the backend to be displayed in the frontend web

## Setting up the server

1. Fork this repository so you have your own copy ([How To Fork](https://docs.github.com/en/enterprise-cloud@latest/pull-requests/how-tos/work-with-forks/fork-a-repo)
2.  Clone your new repository to your working directory. **NOTE:** Make sure you clone **your forked** repository, **not this one**.
3.  Open it on VSC and open a terminal in the folder.
4.  Run the command `npm install` to install all dependencies.
5.  Run the command `npm run start` to start the Express Server - note the `package.json` file offering you this command.
6.  Open a browser and access the URL https://localhost:3000, you should see "Hello World".
7.  If you did not see this, check the `index.ts` file in the repository and uncomment the top lines.
8.  Explore the `index.ts` file to understand how this server works.

**Challenge:** In the frontend, can you use the `fetch` api to get and display this data?

## Storing your assets

To store the assets you have prepared in your webpage, you may follow the guide on the [Express Documentation](https://expressjs.com/en/5x/starter/static-files/). Once you have done that, can you figure out how to display them on the frontend?

## Beyond Assets

Start thinking about what preprocessing of data you might do in the backend. The goal will be to fetch from the Pokemon API in the backend, and then preprocess the data there to be sent to the frontend. This would:
1. Improve frontend tidiness, by avoiding data processing there.
2. Allow for a backup dataset to be stored in the backend, ensuring that data exists even if the Pokemon API ceased to exist.


# MWA Homework05 - Expressjs 01
## Exercise
Create an Express application that will accept a `GET` request from route `/users` and send a `JSON` response with users data.  
  
* Create a new project: `npm init`, and then download the necessary dependencies: `npm i express rxjs superagent`
* JSON data to be fetched from `https://randomuser.me/api/?results=10` using `superagent` and `async/await`
* Use `rxjs` to filter the `JSON` response and send the user first and last name only.
* Your API should hide the framework name to clients.
* Your route should be case sensitive and strict.
* Send standard pagination options in the response headers (check the [pagination docs](https://randomuser.me/documentation#pagination)).
* Proxies must not cache the response, allow the response to be cached at the client for one day if no change occur at the server.

**Note: Add `node_modules` folder to your `.gitignore` file. You should only push your code along with `package.json` and `package-lock.json`**

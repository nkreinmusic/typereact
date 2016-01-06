[TypeReact](http://www.typereact.com) is a web game created for JavaScript programmers to improve their use of shortcut keys with Sublime, Vim, or Emacs key bindings.

##Getting started
* Fork the repo.

* [Register](https://github.com/settings/applications/new) a developer app with GitHub to obtain a client ID and secret.

* Create a secrets.js file in the root of your repo with the following code:
```
module.exports = function() {
 return {
   //insert client ID
   GITHUB_CLIENT_ID: "<YOUR-ID-HERE>",
   //insert secret
   GITHUB_CLIENT_SECRET: "<YOUR-SECRET-HERE>"
 }
}
```
* Launch a MySQL server (make sure the database user and password match those in the dbconfig.js file)

* In your database, add a row to the Users table and fill in 'guest' for the username and github_name columns

* Add a row to the Challenges table with some test code for challenge_unsolved and challenge_solved

* Run these two commands (current build runs with npm version 3.5.1):
```
npm install
npm start
```
* Open ```localhost:8080``` in your browser.

## Resources
* In the ```package.json file```, customized versions of [CodeMirror](https://github.com/codemirror/codemirror), [react-codemirror](https://github.com/JedWatson/react-codemirror), and [react-coundown-clock](https://github.com/pughpugh/react-countdown-clock) are used to include additional functionality and methods. The custom modules can be found in the [typereact org repo](https://github.com/typereact).

* If these modules are edited, you must stop your npm script (ctrl+c), delete the current version of the edited module from your ```node_modules``` folder, and run an npm install again to have the updated version.

## Submitting bug reports

* All bugs should be submitted through the [issue tracker](https://github.com/typereact/typereact/issues).

* Include information about **the browser in which the problem occurred**. Even
  if you tested several browsers, and the problem occurred in all of them,
  mention this fact in the bug report. Also include browser version numbers and
  the operating system that you're on.

* Include your current version of NPM. We currently run on version 3.5.1

* Include a **very specific** description of what went wrong. What page did the error occur on? What exactly happened? What did you expect to happen? What specific steps did you take the cause the error? 

* If making a pull request, please follow the guidelines in the ```CONTRIBUTING.md``` file.

## TypeReact team
TypeReact was created by four software engineers at MakerSquare Los Angeles.
* [Marc Reicher](https://github.com/marcreicher)

* [Nick Krein](https://github.com/nkreinmusic)

* [Chelsea Cheung](https://github.com/chelseatcheung)

* [Tim Lai](https://github.com/tim-lai)

# sass-bootstrap-boilerplate
A very simple Node.js/Express MVC setup to work through css/html design that allows one to write SASS. Bootstrap 5.0 has been incorporated but can be deleted by deleting the include in blog.scss.

Note that any .ejs file you put in the views directory root automatically becomes a route, so there isn't necessarily any need to edit the routes or controller.

All SASS edits are automatically compiled as you make them, so all you have to do is refresh your browser window to see the changes (if don't want to refresh, you can implement https://www.npmjs.com/package/livereload).

## Use this how?
From the command line (I recommend VSCode's built in terminal: https://code.visualstudio.com/):
1. git clone https://github.com/joedeluca/sass-bootstrap-boilerplate.git
2. cd sass-bootstrap-boilerplate
3. npm install
4. npm run dev

Fire up localhost:8080 and start building.


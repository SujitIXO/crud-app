# CRUD App using React and LocalStorage

This is a simple CRUD app that allows users to Signin and Signup first to Create, Read, Update, and Delete data stored in LocalStorage.

## Features

* User can Signin and Signup
* Create, Read, Update and Delete all the data stored in LocalStorage
* Simple and easy-to-use interface

## Installation

To install this app, you will need to have Node.js and npm installed. Once you have those installed, you can run the following command:

* npm install

This will install all of the dependencies required for this app.

## Usage

To run this app, you can run the following command:

* npm start

This will start the app on your local machine. You can then visit `http://localhost:3000` in your web browser to view the app.

And for running the json-server, you can run the following command:

* npx json-server --watch db.json --port (any port number you can give ex:- 3000, 8000, 8080)

This will run the json server on your local machine. You can then visit `http://localhost:${port}/${arrayname}` in your web browser to view the app.

Example:- `http://localhost:8000/employee`


## Documentation

The code for this app is documented in the `src` directory. The main components of the app are:

* `App.js`: This is the main component of the app. It renders the header, footer, and main content area.
* `SigninPage.jsx`: This component is used for user authentication.  
* `Home.js`: This component renders a list of all of the data stored in LocalStorage.
* `FormCreate.js`: This component allows users to create new data and store it in LocalStorage.
* `FormEdit.js`: This component allows users to update existing data stored in LocalStorage.
* `FormDetails.js`: This component allows users to show individual details.

## Troubleshooting

If you are having any problems with this app, please check the documentation or open an issue on GitHub.

## License

This app is licensed under the MIT License.

# Node.js MVC Web Application

This is a simple Node.js MVC web application with login and registration functionality. It uses Express for routing, SQLite for the database, and basic middleware for route access control.

## Getting Started

1. Clone this repository to your local machine.

2. Install the required dependencies using npm:

   ```
   npm install
   ```

3. Start the server:

   ```
   node app.js
   ```

4. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Features

- User can register for an account.
- User can log in with their credentials.
- Basic route access control to redirect unauthenticated users to the login page.

## Project Structure

The project is organized as follows:

- `public/` - Static assets (CSS, images, JS).
- `routes/` - Routing logic.
- `views/` - HTML views for the login and registration pages.
- `controllers/` - Controller logic for handling user authentication.
- `db.js` - Database setup and user table creation.
- `app.js` - Entry point for the application.
- `package.json` - Project dependencies.

## Dependencies

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- SQLite: Embedded SQL database engine.
- EJS: Embedded JavaScript templates (view engine).

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

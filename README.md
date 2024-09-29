# React project

This is a demonstration project built with **TypeScript** and **React** using **Vite** as the build tool. The project also includes a mock server with **json-server** for development testing.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 16.0.0)
- [npm](https://www.npmjs.com/) (included with Node.js)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/tech-challenge.git
   cd tech-challenge
   ```

2. **Install dependencies**:

   Use `npm` or `yarn` to install all project dependencies. Here’s how to do it with `npm`:

   ```bash
   npm install
   ```

   Or if you prefer `yarn`:

   ```bash
   yarn install
   ```

## Scripts

The project includes several npm scripts you can use during development:

- **`npm run dev`** or **`yarn dev`**: Starts the development server. Open your browser and go to `http://localhost:5173` to see the application in action.

- **`npm run mock-server`** or **`yarn mock-server`**: Starts a mock server on port 5000 using `json-server`. Ensure you have a `db.json` file in the root of the project for it to work.

## Project Structure

- **`src/`**: Main source code folder.
- **`public/`**: Static files served directly.
- **`db.json`**: Data file for the mock server.

## Using the app:

The app has 3 pages consisting of home, companies and users:
- Home displays some basic inf and important links.
- Companies you will find the lists of companies and with right click you can access a menu to modify the information.
- Users you will find the lists of abiable users and with right click you can access a menu to modify the information.

## Configuring the database:
In db.json corresponds to the mock database the app is running on. Fell free to add, substract or change the data maintaining the same attributes. In backup.json you will find a copy of the original database in case you want to revert changes.

## Contributing

Contributions are welcome. Please follow these steps if you want to contribute:

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature/my-new-feature`).
3. **Make your changes** and commit (`git commit -am 'Add new feature'`).
4. **Push your changes** (`git push origin feature/my-new-feature`).
5. **Create a pull request** on GitHub.


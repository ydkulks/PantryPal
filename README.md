# Pantry Pal

Pantry Pal is a web app that allows users to browse recipes, view cooking instructions, and generate shopping lists based on selected recipes. It provides a user-friendly interface and utilizes various technologies to enhance the user experience.

## Features

- `Browse recipes`: Users can search for recipes and view detailed information about each recipe, including ingredients, cooking instructions, and nutritional information.
- `Cooking instructions`: Pantry Pal provides step-by-step cooking instructions for each recipe, making it easy for users to follow along.
- `Shopping list`: Users can generate a shopping list based on the ingredients required for their selected recipes, helping them stay organized while grocery shopping.
- `Map integration`: The app incorporates Leaflet.js to display interactive maps.

## Technologies Used

- `React.js`: A JavaScript library for building user interfaces.
- `NEDB`: A lightweight NoSQL database, used as a subset of MongoDB, for storing recipe data, user information, and shopping lists.
- `JWT`: JSON Web Tokens are used for secure authentication and authorization within the app.
- `Leaflet.js`: A JavaScript library for interactive maps.
- `Express.js`: A web framework for Node.js, used for handling routing and server-side logic.
- `spoonacular API`: An external API used to fetch recipe data, search for specific recipes, and retrieve detailed cooking instructions.

## Installation

1. Clone the repository: `git clone https://github.com/ydkulks/PantryPal.git`
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the necessary variables, such as API keys or database connection strings, based on the provided `.env.example` file.
4. Start the development server: `npm start`

## Usage

1. Launch the Pantry Pal web app by visiting `http://localhost:3000` in your preferred web browser.
2. Browse and search for recipes using the provided search functionality.
3. Click on a recipe to view detailed information and cooking instructions.
4. Generate a shopping list based on the selected recipes.

## Contributing

Contributions are welcome! If you'd like to contribute to Pantry Pal, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Open a pull request, providing a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [React.js](https://reactjs.org/)
- [NEDB](https://github.com/louischatriot/nedb)
- [JWT](https://jwt.io/)
- [Leaflet.js](https://leafletjs.com/)
- [Express.js](https://expressjs.com/)
- [spoonacular API](https://spoonacular.com/food-api)

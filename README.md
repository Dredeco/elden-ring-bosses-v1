### Elden Ring Bosses API Website

This is a website built using the Next.js framework that consumes an Elden Ring API to list information about the game's bosses. The site utilizes the fetch API to make requests to the API and display the boss data in a user-friendly interface.

## Features

- Bosses listing: The site displays a list of Elden Ring bosses along with their basic information such as name, image and location.

- Boss details: When a specific boss is clicked from the list, the site displays a detailed page with more in-depth information about the selected boss. This includes description, drops, and region loction.

## Technologies Used

- Next.js: The site is built upon the Next.js framework, which provides a powerful architecture for building high-performance React applications.

- React: React is used as the rendering library to create reusable and dynamic components.

- Styled Components: The site's styling is developed using this library.

- Fetch API: The fetch API is used to make requests to the Elden Ring API and retrieve the boss data.

## How to Run the Project Locally

1. Make sure you have Node.js and npm (or yarn) installed on your machine.
2. Clone this repository to your local environment.
3. Navigate to the project's root directory.
4. Run the following command to install the project dependencies:
```bash
npm install
# or
yarn install
```

5. Once the installation is complete, execute the following command to start the development server:
```bash
npm run dev
# or
yarn dev
```

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/api](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/api.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contribution

Contributions are welcome! If you encounter any issues, bugs, or have any improvements to suggest, feel free to open an issue or submit a pull request.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

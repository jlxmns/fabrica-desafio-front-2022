import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/navbar';
import HomePage from './routes/home.page';
import PlayGamePage from './routes/playingGame.page';
import AnimalCardPage from './routes/animalCard.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/play-game",
        element: <PlayGamePage />,
      },
      {
        path: "/our-animals",
        element: <AnimalCardPage />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

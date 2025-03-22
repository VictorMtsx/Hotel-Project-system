import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LogIn } from "./components/home-componens/menu's-options/logIn.jsx";
import { SignUp } from "./components/home-componens/menu's-options/signUp.jsx";
import VerifyEmail from "./components/pages/validationPages/verifyEmail.jsx";
import HomePage from "./components/home-componens/home-page.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/Login",
		element: <LogIn />,
	},
	{
		path: "/SignUp",
		element: <SignUp />,
	},
	{
		path: "/VerifyEmail",
		element: <VerifyEmail />,
	},
	{
		path: "/home-page",
		element: <HomePage />,
	},
]);

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
} else {
	console.error("Element with id 'root' not found");
}

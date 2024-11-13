import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LogIn } from "./components/home-componens/menu's-options/logIn.jsx";
import { SignUp } from "./components/home-componens/menu's-options/signUp.jsx";

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

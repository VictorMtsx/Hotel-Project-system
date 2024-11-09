import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/home.tsx";
import { SignUp } from "./pages/sign-up.tsx";

//router
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/Sign-up",
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

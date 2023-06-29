import {
	RouterProvider,
	createBrowserRouter,
	Route,
	createRoutesFromElements
} from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<Dashboard />}
			/>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;

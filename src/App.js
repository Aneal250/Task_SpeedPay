import "./App.css";
import CardList from "./components/CardList";
import ListBar from "./components/ListBar";
import ListTitle from "./components/ListTitle";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="">
			<NavBar />
			<ListBar />
			<ListTitle title="Popular Foods" />
			<CardList />
			<ListTitle title="Special Offers" />
			<CardList />
		</div>
	);
}

export default App;

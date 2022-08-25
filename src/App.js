import "./App.css";
import CardList from "./components/CardList";
import ListBar from "./components/ListBar";
import ListTitle from "./components/ListTitle";
import NavBar from "./components/NavBar";
import ListCard2 from "./components/ListCard2";

function App() {
	return (
		<div className="">
			<NavBar />
			<ListBar />
			<ListTitle title="Popular Foods" />
			<CardList />
			<ListTitle title="Special Offers" />
			<ListCard2 />
		</div>
	);
}

export default App;

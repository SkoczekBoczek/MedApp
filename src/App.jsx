import CalendarCard from "./components/CalendarCard.jsx";
import SideBar from "./components/SideBar.jsx";
import WelcomeCard from "./components/WelcomeCard.jsx";
import ContactCard from "./components/ContactCard.jsx";

function App() {
	return (
		<>
			<SideBar />
			<main className="main">
				<WelcomeCard />
				<CalendarCard />
				<ContactCard />

				<section className="big-box card"></section>
				<section className="small-box card"></section>
			</main>
		</>
	);
}

export default App;

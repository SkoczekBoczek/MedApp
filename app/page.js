import CalendarCard from "./components/CalendarCard";
import SideBar from "./components/SideBar";
import WelcomeCard from "./components/WelcomeCard";
import ContactCard from "./components/ContactCard";
import MedicationsSection from "./components/MedicationsSection";

export default function Home() {
	return (
		<>
			<SideBar />
			<main className="main">
				<WelcomeCard />
				<CalendarCard />
				<ContactCard />
				<MedicationsSection />
				<section className="smallBox card"></section>
			</main>
		</>
	);
}

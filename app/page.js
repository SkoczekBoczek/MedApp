import CalendarCard from "./components/CalendarCard/CalendarCard";
import SideBar from "./components/SideBar/SideBar";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import ContactCard from "./components//ContactCard/ContactCard";
import MedicationsSection from "./components/MedicationsSection/MedicationsSection";
import AuthContextProvider from "./context/AuthContext";

export default function Home() {
	return (
		<>
			<AuthContextProvider>
				<SideBar />
				<main className="main">
					<WelcomeCard />
					<CalendarCard />
					<ContactCard />
					<MedicationsSection />
					{/* <section className="smallBox card"></section> */}
				</main>
			</AuthContextProvider>
		</>
	);
}

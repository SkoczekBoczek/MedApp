import CalendarCard from "./components/CalendarCard";
import SideBar from "./components/SideBar";
import WelcomeCard from "./components/WelcomeCard";
import ContactCard from "./components/ContactCard";

export default function Home() {
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
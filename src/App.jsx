import doctorsBgc from "./assets/ilustracja-lekarzy.png"
import NavBar from "./components/NavBar.jsx";
import MenuPanel from "./components/MenuPanel.jsx";

function App() {


  return (
    <>
      <div className="wrapper">
        <NavBar></NavBar>
        <main>
          <MenuPanel></MenuPanel>
          <div className="patientSidebar"></div>
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default App

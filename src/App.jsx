import medLogo from "./assets/medLogo.jpg"

function App() {


  return (
    <>
      <div className="wrapper">
        <aside>
          <h2>MedCare</h2>
          <ul>
            <li><button><i className="fa-solid fa-house"></i></button></li>
            <li><button><i className="fa-solid fa-user"></i></button></li>
            <li><button><i className="fa-solid fa-comment"></i></button></li>
            <li><button><i className="fa-solid fa-calendar-days"></i></button></li>
          </ul>
          <button>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </aside>
        <main></main>
        <footer></footer>
      </div>
    </>
  )
}

export default App

export default function NavBar() {
    return (
        <>
            <aside>
                <h2>MedCare</h2>
                <ul>
                    <li>
                        <button><i className="fa-solid fa-house"></i></button>
                    </li>
                    <li>
                        <button><i className="fa-solid fa-user"></i></button>
                    </li>
                    <li>
                        <button><i className="fa-solid fa-comment"></i></button>
                    </li>
                    <li>
                        <button><i className="fa-solid fa-calendar-days"></i></button>
                    </li>
                </ul>
                <button>
                    <a href="https://chatgpt.com/c/67e6fae8-0f18-8001-b68e-c7712ebfd33d" target="_blank">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </a>
                </button>
            </aside>
        </>
    )
}
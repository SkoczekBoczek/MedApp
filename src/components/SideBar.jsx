import "../components/SideBar.css";

export default function NavBar() {
	return (
		<aside className="sidebar">
			<div className="sidebar-header">
				<h1 className="logo">MedCare</h1>
				<button className="burger">
					<i className="fas fa-bars"></i>
				</button>
			</div>
			<nav className="menu">
				{/* <a href="#">
					<i className="fas fa-home"></i> Dom
				</a> */}
				<a href="#">
					<i className="fas fa-user"></i> Profil
				</a>
				<a href="#">
					<i className="fas fa-comment-dots"></i> Wiadomość
				</a>
				<a href="#">
					<i className="fas fa-calendar-alt"></i> Kalendarz
				</a>
				{/* <a href="#">
					<i className="fas fa-star"></i> Podsumowanie
				</a> */}
				<a href="#">
					<i className="fas fa-pills"></i> Leki
				</a>
			</nav>
		</aside>
	);
}

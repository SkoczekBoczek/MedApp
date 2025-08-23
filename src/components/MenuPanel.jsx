import {useState, useEffect } from "react";

import doctorsBgc from "../assets/ilustracja-lekarzy.png";

export default function MenuPanel() {
    const [formattedDate, setFormattedDate] = useState("")
    const months = [
        "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
        "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
    ];

    useEffect(() => {
        function updateDate() {
            const date = new Date();
            const month = months[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            const hour = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");

            const newformattedDate = `${month} ${day}, ${year} ${hour}:${minutes}`
            setFormattedDate(newformattedDate);
        }

        updateDate(); // Wyświetlanie od razu przy załadowaniu
        const runningTime = setInterval(updateDate, 1000);

        return () => {
            clearInterval(runningTime);
        };
    }, []);

    return (
        <>
            <div className="menuPanel">
                <div className="goodMorningBox">
                    <div className="goodMorningBtns">
                        <button><i className="fa-solid fa-gear"></i></button>
                        <button><i className="fa-solid fa-bell"></i></button>
                    </div>
                    <div className="currentDate">
                        <i className="fa-solid fa-calendar"></i>
                        {formattedDate}
                    </div>
                    <h1>Witaj w MedCare!</h1>
                    <p>Miłego dnia, Łucja!</p>
                    <img src={doctorsBgc} alt="lekarze"/>
                </div>
            </div>
        </>
    )
}
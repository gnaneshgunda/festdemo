"use client";
import {useState} from "react";
import "../styles/schedule.css";
import Day0 from "../(days)/day-0/page";
import Day1 from "../(days)/day-1/page";
import Day2 from "../(days)/day-2/page";

export default function Schedule() {
    const [activeEvent, setActiveEvent] = useState(null);
    const days=[0,1,2]
    return (
        <div id="schedule-container">
           <div className="days-btn">
                {days.map((day) => (
                    <button key={day} className="day-btn" onClick={() =>setActiveEvent((activeEvent === day) ? null : day)}>
                        Day-{day}
                    </button>
                ))}
            </div>
           <div className="schedule">
                {activeEvent === 0 && <Day0 />}
                {activeEvent === 1 && <Day1 />}
                {activeEvent === 2 && <Day2 />}
                {activeEvent === null && <h1 className="title">Select a Day</h1>}
            </div>

        </div>
    );



}

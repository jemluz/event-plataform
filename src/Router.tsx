import { Route, Routes } from "react-router-dom";
import { EventPage } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe/>} />
            <Route path="/event" element={<EventPage/>} />
            <Route path="/event/lesson/:slug" element={<EventPage/>} />
        </Routes>
    )
}
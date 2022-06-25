import { Route, Routes } from "react-router-dom";
import { EventPage } from "./pages/Event";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<p>adad</p>} />
            <Route path="/event" element={<EventPage/>} />
            <Route path="/event/lesson/:slug" element={<EventPage/>} />
        </Routes>
    )
}
import { Route, Routes } from "react-router-dom";
import { EventPage } from "./pages/Event";
import { SubscribePage } from "./pages/Subscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<SubscribePage/>} />
            <Route path="/event" element={<EventPage/>} />
            <Route path="/event/lesson/:slug" element={<EventPage/>} />
        </Routes>
    )
}
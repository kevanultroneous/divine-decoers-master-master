import { BrowserRouter, Route, Routes } from "react-router-dom"
import CustomTemplePage from "./Pages/CustomTemplePage"
import MainPage from "./Pages/MainPage"
import NotFound from "./Pages/NotFound"
import PersonalViewPage from "./Pages/PersonalViewPage"
import ThankYou from "./Pages/ThankYou"

const SystemRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/customtemples" element={<CustomTemplePage />} />
                <Route path="/viewitem/:templeid" element={<PersonalViewPage/>}/>
                <Route path="/thankyou" element={<ThankYou/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default SystemRoute
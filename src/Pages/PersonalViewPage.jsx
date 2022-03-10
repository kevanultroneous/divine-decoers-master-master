import { Container } from "react-bootstrap"
import DivineNavbar from "../Components/common/Navbar"
import 'react-multi-carousel/lib/styles.css';
import Footer from "../Components/common/Footer";
import RelatedItem from "../Components/Products/RelatedItem";
import PersonalView from "../Components/Products/PersonalView";
import PersonalAd from "../Components/Products/PersonalAd";


const PersonalViewPage = () => {
    return (
        <Container fluid className="back-contain">
            <DivineNavbar />
            <PersonalAd />
            <PersonalView />
            {/* <RelatedItem /> */}
            <Footer />
        </Container>
    )
}
export default PersonalViewPage
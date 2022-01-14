import '../App';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Content } from './Content';

const Homepage = () => {
    return (
        <div className="home-main">
            <Navbar></Navbar>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default Homepage

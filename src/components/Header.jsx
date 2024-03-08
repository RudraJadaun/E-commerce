
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingBag, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../assets/Styles/components.css'

export const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                {/* on expanding create the toggle bar*/}
                <Container>
                    <div className='Container1'>
                        <img className='image' src={logo} alt='TechNest' />
                        {/* <Navbar.Brand href='/' className='title1'>TechNest</Navbar.Brand> */}
                    </div>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/cart'>
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                            <Nav.Link href='/login'>
                                <FaUser /> Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
export default Header;
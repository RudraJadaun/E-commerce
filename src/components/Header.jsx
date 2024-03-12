
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import '../assets/Styles/components.css'

export const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);


    // descontructing and calling a selector so that it will fetch the cart state from the store
    const { userInfo } = useSelector((state) => state.auth);
    const logoutHandler = () => {
        console.log("bb");
    }
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
                            <LinkContainer to='/cart'>
                                <Nav.Link href='/cart'>
                                    <FaShoppingCart /> Cart
                                    {
                                        cartItems.length > 0 &&
                                        (<Badge pill bg='success' style={{ marginLeft: '5px' }}>
                                            {cartItems.reduce((a, c) => a + c.qty, 0)}
                                        </Badge>)
                                        //created a badge for the quantity in the cart icon in header
                                    }
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (<NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>) : (<LinkContainer to='/login'>
                                <Nav.Link href='/login'>
                                    <FaUser /> Sign In
                                </Nav.Link>
                            </LinkContainer>)}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
export default Header;
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
    return (
        <div>
            <h1>Lastest product</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />{/*This line maps over an array of products stored in the data object Within each iteration of the map function, a <Col> component is created. This component represents a column in the grid system. The key prop is set to a unique identifier of the product (its _id),*/}
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
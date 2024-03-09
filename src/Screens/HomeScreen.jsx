import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';
//instead of manualy fetching now we will use the useEffect hook to get data from backend
import axios from 'axios';

const HomeScreen = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const { data } = await axios.get('/api/products');
    //         setProducts(data);
    //     };
    //     fetchProducts();

    // }, []); //simply a dependency to fetch the product data from api and add it to our ui

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
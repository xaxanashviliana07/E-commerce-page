import {useEffect, useState} from "react";
import {AddressBar} from "../components/AddressBar.jsx";
import {Header} from "../components/Header.jsx";
import {useParams} from "react-router-dom";


const Product = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProductData(data);
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <div>
            <AddressBar />
            <Header />
            <p>{productData.title}</p>
            <p>{productData.price} $</p>
            <p>{productData.description}</p>
            <img src={productData.image} width={50} alt=""/>
        </div>
    );
};

export default Product;

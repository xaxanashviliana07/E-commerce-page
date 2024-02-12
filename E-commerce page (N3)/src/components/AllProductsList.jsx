import {useEffect, useState} from "react";
import classes from '../modules/AllProductsList.module.scss';
import {Link} from "react-router-dom";

const AllProducts = () => {

    const [productsArr, setProductsArr] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProductsArr(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <div className={classes['products-list']}>
                {productsArr.map(function(product, index) {
                    return (
                        <Link to={`/product/${product.id}`} key={index}>
                            <img width={"100px"} src={product.image} alt=""/>
                            <p>{product.title.slice(0, 20)} ...</p>
                            <p className={classes['price']}>{product.price} $</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default AllProducts;

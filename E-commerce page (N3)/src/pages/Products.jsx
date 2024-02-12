import {AddressBar} from "../components/AddressBar.jsx";
import {Header} from "../components/Header.jsx";
import {Categories} from "../components/Categories.jsx";
import AllProductsList from "../components/AllProductsList.jsx";


const Products = () => {
    return (
        <div>
            <AddressBar />
            <Header />
            <Categories />
            <AllProductsList />
        </div>
    );
};

export default Products;

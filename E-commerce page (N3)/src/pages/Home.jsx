import {AddressBar} from "../components/AddressBar.jsx";
import {Header} from "../components/Header.jsx";
import {Categories} from "../components/Categories.jsx";
import {PopularProducts} from "../components/PopularProducts.jsx";
import {DealsProducts} from "../components/DealsProducts.jsx";

export const Home = () => {
    return (
        <>
            <AddressBar />
            <Header />
            <Categories />
            <PopularProducts />
            <DealsProducts />
            <h1>Home</h1>
        </>
    )
}
import {useState, useEffect} from "react";
// named export
import Product from "./Product";
import Skeleton from "./Skeleton";
import {Link} from "react-router-dom";

export const ProductCard = () => {
    // Local state variable
    const [listOfProduct, setlistOfProduct] = useState([]); // array destructuring
    const [filterProduct, setFilterProduct] = useState([]);
    const [SearchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const resData = await data.json();
        setlistOfProduct(resData);
        setFilterProduct(resData);
    }

    
    // conditional rendering
    // if(listOfProduct.length === 0) {
    //     return <Skeleton/>
    // }

    return listOfProduct.length === 0 ? <Skeleton/> : (
        <div>
            <div style={{ "marginTop": "10px" }}>
                <input type = "text" onChange={(e)=> setSearchText(e.target.value)} value = {SearchText}/>
                <button onClick={()=> {
                    const filteredData = listOfProduct.filter((product)=>{
                        return product.title.toLowerCase().includes(SearchText.toLowerCase());
                    });
                    setFilterProduct(filteredData);
                    
                }}>Search</button>
            </div>
            <button onClick={() => {

                const filteredProduct = listOfProduct.filter(product => product.rating.rate >= 4);
                setlistOfProduct(filteredProduct);
            }} style={{ "marginTop": "10px" }}>
                Top rated product
            </button>
            <div className="product_card">
                {
                    filterProduct.map((product) => {
                        return <Link key={product.id} to={`/product/${product.id}`}><Product product={product} /></Link> ;
                    })}
            </div>
        </div>

    )
};

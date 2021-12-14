import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../../State/Product/ProductAction";

const DisplayProduct = (props)=>{
    const productList = useSelector((state)=>state.productReducer.products)

    //we need to make call to fetch products
    //like fetch we have axios it uses async and await
    const fetchProductsDispatch = useDispatch();

    //componentDidMount : by initializing the parameters as dependency
    useEffect(()=>{
        fetchProductsDispatch(fetchProducts())
    },[])

    return(
        <>
            {productList && productList.length > 0 ?
                productList.map((product)=>{
                    return product.name
                })
                :
                <b>{"No Products To Display"}</b>}
        </>
    )

}

export default DisplayProduct;
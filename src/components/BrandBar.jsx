import React, {useEffect, useState} from 'react';
import {Card, Row, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getBrands, selectBrand} from "../store/actions/brands";
import {authCheck} from "../store/actions/users";

const BrandBar = () => {
    const {allBrands, selectedBrand, status} = useSelector(store => store.brands)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        dispatch(getBrands())
        if (status==="success") {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [loading])
    return (
        <>
            {loading ? <Spinner animation={"grow"}/> : (
                <div className="d-flex">
                    {allBrands?.map((brand) => (
                        <Card key={brand.id}
                              className={'p-3'}
                              style={{cursor: "pointer"}}
                              onClick={() => dispatch(selectBrand(brand))}
                              border={brand.id === selectedBrand?.id ? 'danger' : 'light'}
                        >
                            {brand.name}
                        </Card>
                    ))
                    }
                </div>)}
        </>

    );
}
export default BrandBar;
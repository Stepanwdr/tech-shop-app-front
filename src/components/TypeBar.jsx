import React, {useEffect} from 'react';
import {ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getTypes, selectType} from "../store/actions/types";
const TypeBar = () => {
    const {allTypes,selectedType}=useSelector(store=>store.types)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getTypes())
    },[])
    return (
        <ListGroup>
            {allTypes?.map((type) => (
                <ListGroup.Item
                    key={type.id}
                    onClick={()=>dispatch(selectType(type))}
                    active={type.id===selectedType?.id}
                    style={{cursor:"pointer"}}
                >
                    {type.name}
                </ListGroup.Item>
            ))}

        </ListGroup>
    );
};

export default TypeBar;
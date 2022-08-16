import React from 'react';
import { useSelector } from 'react-redux';
import R from 'ramda';


export default function CateringMenuItemList(){
    const { catItems } = useSelector(R.pick(['catItems']));
    console.log(catItems)
    return(
        <h1>hello</h1>
    )
}
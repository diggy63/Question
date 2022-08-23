import React from 'react';
import CateringItem from '../CateringItem/CateringItem';
import R from 'ramda';

export default function CateringMenuList({items}){
    console.log(items)
    return(
        <ul>
        {R.reverse(items).map((item) => (
            <CateringItem key={item.id} {...item} />
          ))}
          </ul>
    )
}
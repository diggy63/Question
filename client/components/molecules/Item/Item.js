import React, { useState, useEffect } from 'react';

export default function item({id,name,description,price}){
    return(
        <div>
            <div>
            {name}
            </div>
            {description}
            <div>
            {price}
            </div>
        </div>
    )
}
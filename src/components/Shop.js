import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const Shop = () => {

    useEffect(() => {
        fetchData()
    },[])

    const [items, setItems] = useState([])

    const fetchData = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get')
        const items = await data.json()
        setItems(items.data)
    }

    return (
        <div className="shop">
            {
                items.map(item => {
                    return (
                        <Link to={`/shop/${item.itemId}`}>
                            <h1 key={item.itemId}>{item.item.name}</h1>
                        </Link>
                    )
                })
            }    
        </div>
    )
}

export default Shop
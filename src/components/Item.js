import React, { useEffect, useState } from 'react'

const Item = ({ match }) => {

    console.log(match.params.id)

    useEffect(() => {
        fetchItem()
    },[])

    const [item, setItem] = useState({
        images: {}
    })

    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
        const item = await data.json()
        setItem(item.data.item)
    }

    return (
        <div>
            {console.log(item.images)}
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <img style={{backgroundColor: 'black'}} src={item.images.icon} alt={item.name}/>
        </div>
    )
}

export default Item
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PizzaCard from "../components/PizzaCard";
import { orderSelector } from "../redux/slices/orderSlice";

export default function PizzaSatge() {
    const orders = useSelector(orderSelector)
    const [ordPlaced, setOrdPlaced] = useState([])
    const [ordMaking, setOrdMaking] = useState([])
    const [ordReady, setOrdReady] = useState([])
    const [ordPicked, setOrdPicked] = useState([])
    useEffect(() => {
        let placed = orders.filter(item => item.stage === 'placed')
        setOrdPlaced([...placed])
        let making = orders.filter(item => item.stage === 'making')
        setOrdMaking([...making])
        let ready = orders.filter(item => item.stage ==='ready')
        setOrdReady([...ready])
        let picked = orders.filter(item => item.stage === 'picked')
        setOrdPicked([...picked])
    }, [orders])
    return (
        <div name="stage" id="stage">
            <h2 className="heading">Pizza Stages Section</h2>
            <div className="grid-container">
                <div className="grid-item">
                    <h2>Order Placed</h2>
                    {ordPlaced.map((item,index) => {
                        return (
                            <PizzaCard key={index} order={item}/>
                        )
                    })}
                </div>
                <div className="grid-item">
                    <h2>Order in making</h2>
                    {ordMaking.map((item,index) => {
                        return (
                            <PizzaCard key={index} order={item}/>
                        )
                    })}
                </div>
                <div className="grid-item">
                    <h2>Order Ready</h2>
                    {ordReady.map((item,index) => {
                        return (
                            <PizzaCard key={index} order={item}/>
                        )
                    })}
                </div>
                <div className="grid-item">
                    <h2>Order Picked</h2>
                    {ordPicked.map((item,index) => {
                        return (
                            <PizzaCard key={index} order={item}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
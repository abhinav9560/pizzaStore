import React from "react";
import PizzaSatge from "../screens/PizzaStages";
import MainSection from "../screens/MainScreen";
import CreateOrder from "../screens/CreateOrder"


export default function Container() {
    return (
        <>
            <PizzaSatge />
            <MainSection />
            <CreateOrder/>
        </>
    )
}
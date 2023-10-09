import React from "react";
import OptionQuestion from "../Components/OptionQuestion";
import { ynOptions } from "../utilities";

const ExpansionSpaceTwo = () => {
    return(
        <>
        <OptionQuestion text="Is the molding or base tight to the floor, or nailed down to the flooring?" options={ynOptions} boundValue="es8" />
        <OptionQuestion text="Are any planks cut flush to a wall, cabinet, fireplace, transition, or sliding door without proper expansion gap?" options={ynOptions} boundValue="es9" />
        <OptionQuestion text="Is there any evidence of fasteners, plumbing, or other fixtures placed through the floor?" options={ynOptions} boundValue="es10" />
        <OptionQuestion text="Are there cabinets or other permanent structures installed on the flooring?" options={ynOptions} boundValue="es11" />
        </>
    )
}
export default ExpansionSpaceTwo;
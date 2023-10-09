import React from "react";
import InputQuestion from "../Components/InputQuestion";
import OptionQuestion from "../Components/OptionQuestion";
import { ynOptions } from "../utilities";

const ExpansionSpaceOne = () => {
return(
    <>
    <OptionQuestion text="Is the floor terminated against ceramic tile, masonary, or rock structures?" options={ynOptions} boundValue="es1" />
        {false ? <InputQuestion text="Describe the transition" boundValue="es2" /> : null}
        <OptionQuestion text="Is the flooring installed in a bath?" options={ynOptions} boundValue="es3" />
        {false ? <><InputQuestion text="How is the flooring terminated around the toilet?" boundValue="es4" /><InputQuestion text="How is the flooring terminated at the tub or shower?" boundValue="es5" /></> : null}
        <OptionQuestion text="Have transitions been installed as required by manufacturer's requirements for linear installed space over the specified limit?" options={ynOptions} boundValue="es6" />
        <OptionQuestion text="Is there evidence of excessively heavy furniture (pianos, gun safes, etc.) placed on top of the floor restricting the fre movement of the floor?" options={ynOptions} boundValue="es7" />
    </>
)
}
export default ExpansionSpaceOne;
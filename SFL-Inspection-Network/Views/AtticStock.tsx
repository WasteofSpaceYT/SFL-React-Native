import { Text } from "react-native";
import InputQuestion from "../Components/InputQuestion";
import OptionQuestion from "../Components/OptionQuestion";
import { ynOptions } from "../utilities";
import React from "react";

const AtticStock = () => {
return(
    <>
        <Text style={{fontWeight: "bold"}}>Attic Stock</Text>
    <OptionQuestion text="Is there attic stock?" options={ynOptions} boundValue="as1" />
    <InputQuestion text="How and where is the attic stock stored?" boundValue="as2" />
    </>
)
}
export default AtticStock;
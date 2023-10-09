import { Text, View } from "react-native";
import OptionQuestion from "../Components/OptionQuestion";
import InputQuestion from "../Components/InputQuestion";
import { ynOptions, ynuOptions } from "../utilities";
import React from "react";

const Underlayment = () => {
    return(
        <>
        <Text style={{fontWeight: "bold"}}>Underlayment</Text>
        <View style={{alignContent: "center"}}>
            <OptionQuestion text="Is there an underlayment?" options={ynuOptions} boundValue="ul1" />
            <OptionQuestion text="Is the underlayment attached to the floor?" options={ynuOptions} boundValue="ul2" />
            <InputQuestion text="What type of underlayment was used?" boundValue="ul3" />
            <InputQuestion text="Is additional underlayment acceptable when the product has attached padding/underlayment?" boundValue="ul4" />
        </View>
        </>
    )
}
export default Underlayment;
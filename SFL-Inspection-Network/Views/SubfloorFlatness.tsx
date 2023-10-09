import { Text, View } from "react-native";
import OptionQuestion from "../Components/OptionQuestion";
import InputQuestion from "../Components/InputQuestion";
import { ynOptions, ynuOptions } from "../utilities";
import React from "react";

const SubfloorFlatness = () => {
    return (
        <>
        <Text style={{fontWeight: "bold"}}>Subfloor Flatness</Text>
        <View style={{alignContent: "center"}}>
            <OptionQuestion text="Does the floor conform to the manufacturer's flatness requrement?" options={ynOptions} boundValue="sf1" />
            {true ? <InputQuestion text="Where does it not?" boundValue="sf2" /> : null}
            <InputQuestion text="Out of flat measurements:" units="in 10ft" boundValue="sf3" />
            <InputQuestion text="Slope measurements:" units="in 6ft" boundValue="sf4" />
        </View>
        </>
    );
}
export default SubfloorFlatness;
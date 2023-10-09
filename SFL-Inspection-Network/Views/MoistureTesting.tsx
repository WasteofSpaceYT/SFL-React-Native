import { Dimensions, View } from "react-native";
import { Text } from "react-native-elements";
import OptionQuestion from "../Components/OptionQuestion";
import { ynuOptions } from "../utilities";
import InputQuestion from "../Components/InputQuestion";
import React from "react";
import AtticStock from "./AtticStock";

const MoistureTesting = () => {
return(
    <>
    <Text style={{fontWeight: "bold"}}>Moisture Testing for Concrete Subfloors</Text>
    <View style={{alignContent: "center"}}>
        <OptionQuestion text="Was moisture testing performed prior to installation?" options={ynuOptions} boundValue="mt1" />
        {false ? <InputQuestion text="What method of testing was performed and what were the results?" boundValue="mt2" /> : null}
        <InputQuestion text="What are the comparitive moisture readings of the floor (baseboard, molding)?" boundValue="mt3" />
        <OptionQuestion text="Are records available indicating the moisture testing results and equipment used to measure moisture content of the subfloor? Moisture Barrier Installed?" options={ynuOptions} boundValue="mt4" />
    </View>
    {Dimensions.get("window").height < 1024 ? <AtticStock /> : null}
    </>
)
}
export default MoistureTesting;
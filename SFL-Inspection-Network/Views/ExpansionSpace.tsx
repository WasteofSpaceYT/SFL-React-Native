import { Text, View } from "react-native";
import OptionQuestion from "../Components/OptionQuestion";
import { ynOptions } from "../utilities";
import InputQuestion from "../Components/InputQuestion";
import ExpansionSpaceOne from "./ExpansionSpaceOne";
import ExpansionSpaceTwo from "./ExpansionSpaceTwo";
import React from "react";

const ExpansionSpace = (props: {first: boolean, bigEnough: boolean}) => {
return (
    <>
    <Text style={{fontWeight: "bold"}}>Expansion Space</Text>
    <View style={{alignContent: "center"}}>
        {props.first && !props.bigEnough ? <ExpansionSpaceOne /> : <ExpansionSpaceTwo />}
        {props.bigEnough ? <><ExpansionSpaceOne /><ExpansionSpaceTwo /></> : null}
        </View>
    </>
)
}
export default ExpansionSpace;
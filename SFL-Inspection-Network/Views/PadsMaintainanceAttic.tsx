import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import InputQuestion from "../Components/InputQuestion";
import OptionQuestion from "../Components/OptionQuestion";
import { ynOptions } from "../utilities";
import AtticStock from "./AtticStock";

const PadsMaintainanceAttic = (props: {bigEnough: boolean}) => {
return(
    <>
    <Text style={{fontWeight: "bold"}}>Felt or nylon pads under all furniture legs</Text>
    <View style={{alignContent: "center"}}>
        <InputQuestion text="Width of the caster wheels on movable furniture and conformance to the manufacturer's requrements?" boundValue="pm1" />    
    </View>
    <OptionQuestion text="Is there evidence of use of a wheelchair or other heavy rolling furniture in the home?" boundValue="pm2" options={ynOptions} />
    <Text style={{fontWeight: "bold"}}>Maintainance</Text>
    <View style={{alignContent: "center"}}>
        <InputQuestion text="What specific floor cleaning products have been used?" boundValue="pm3" />
        <OptionQuestion text="Is there evidence of the steam mops or other products used that are not approved for use with vynil floors?" options={ynOptions} boundValue="pm4" />
    </View>
    {props.bigEnough ? <AtticStock /> : null}
    </>
)
}
export default PadsMaintainanceAttic;
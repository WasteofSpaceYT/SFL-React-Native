import React from "react"
import { Text, View } from "react-native"
import InputQuestion from "../Components/InputQuestion"
import OptionQuestion from "../Components/OptionQuestion"
import { ynOptions, ynuOptions } from "../utilities";

const ClimateControlled = () => {
    return(
        <>
        <Text style={{fontWeight: "bold"}}>Climate Controlled</Text>
        <View style={{alignContent: "center"}}>
            <OptionQuestion text="Is there an operating central HVAC system in the home?" options={[{label: "Yes", value: "yes"}, {label: "No", value: "no"}, {label: "Unknown", value: "unknown"}]} boundValue="cc1" />
            {true ? <View>
              <InputQuestion text="How is the home heated?" boundValue="cc2" /> 
              <InputQuestion text="How is the heat cooled?" boundValue="cc3" />
              </View> : null}
            <OptionQuestion text="Was the HVAC system on before, during, and after the acclimation of the flooring in the home?" options={ynuOptions} boundValue="cc4" />
            <OptionQuestion text="Was the HVAC system on before, during, and after the installation?" options={ynuOptions} boundValue="cc5" />
            <OptionQuestion text="Is the home a permanent residence?" options={[{label: "Yes", value: "yes"}, {label: "Vacation Home", value: "vacation home"}, {label: "Rental", value: "rental"}]} boundValue="cc6" />
            <InputQuestion text="What is the relative humidity of the home?" units="rh" boundValue="cc7" />
        </View>
        </>
    )
}

export default ClimateControlled
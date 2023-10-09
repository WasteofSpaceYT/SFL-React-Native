import { Text, View } from "react-native";
import OptionQuestion from "../Components/OptionQuestion";
import InputQuestion from "../Components/InputQuestion";
import { ynOptions, ynuOptions } from "../utilities";
import React from "react";

const DirectSunlight = () => {
    return(
        <>
        <Text style={{fontWeight: "bold"}}>Direct Sunlight</Text>
        <View style={{alignContent: "center"}}>
            <OptionQuestion text="Is the room exposed to direct sunlight?" options={ynOptions} boundValue="ds1" />
            {false ? <><InputQuestion text="What is the temperature of the floor exposed to sunlight?" boundValue="ds2" /><InputQuestion text="What is the temperature of the floor not exposed to sunlight?" boundValue="ds3" /></> : null}
            <OptionQuestion text="Do the rooms receive direct sunlight throughout the day?" boundValue="ds4" options={ynOptions} />
            <OptionQuestion text="Are shades, blinds, or curtains installed on the windows to sheild the flooring from direct sun exposure?" options={ynOptions} boundValue="ds5" />
            <OptionQuestion text="Are the windows UV rated?" options={ynuOptions} boundValue="ds6" />
            </View>
        </>
    )
}
export default DirectSunlight;
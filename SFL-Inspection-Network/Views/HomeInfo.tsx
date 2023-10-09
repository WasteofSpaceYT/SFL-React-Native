import { Text, View } from "react-native";
import InputQuestion from "../Components/InputQuestion";
import OptionQuestion from "../Components/OptionQuestion";
import { ynuOptions } from "../utilities";
import React from "react";

const HomeInfo = () => {
    return(
        <>
        <Text style={{fontWeight: "bold"}}>Home and Installation Information</Text>
        <View style={{alignContent: "center"}}>
            <InputQuestion text="Month/year installed" boundValue="hi1" />
            <InputQuestion text="Month/year problem noticed" boundValue="hi2" />
            <OptionQuestion text="Have any repairs been done?" options={ynuOptions} boundValue="hi3" />
            {false ? <InputQuestion text="What repairs, where, and who repaired it?" boundValue="hi4" /> : null}
            <Text style={{fontWeight: "bold", marginTop: 25}}>Occupants</Text>
            <InputQuestion boundValue="hi5" text="Adults" />
            <InputQuestion boundValue="hi6" text="Children" />
            <InputQuestion boundValue="hi7" text="Pets" />
        </View>
        </>
    )
}
export default HomeInfo;
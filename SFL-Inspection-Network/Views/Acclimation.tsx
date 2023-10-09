import React from "react"
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import InputQuestion from "../Components/InputQuestion";
import OptionQuestion from "../Components/OptionQuestion";
import { ynOptions, ynuOptions } from "../utilities";
import { ReportInProgress } from "../App";

const Acclimation = () => {
  let dir: "column" | "row" = "row"
  {(Dimensions.get("window").width > 799) ? (dir = "row") : (dir = "column")}
    return(
<View style={{flexDirection: "column", alignContent: "center"}}>
      <Text style={{fontWeight: "bold"}}>Acclimation</Text>
      <InputQuestion text="Where in the home was the floor acclimated?" boundValue={"acc1"} />
      <View style={{flexDirection: dir}}>
      <Text style={{marginTop: "auto", marginBottom: "auto",}}>How many days/weeks before the installation was the floor in the home?</Text>
      <View style={{flexDirection: "row"}}>
        <TextInput style={styles.input} keyboardType='default' onChangeText={(text) => {
          let WorkingReportTemp = Object.assign(ReportInProgress.getWorkingReport())
          WorkingReportTemp["acc2"][0] = text + " weeks"
          ReportInProgress.setWorkingReport(WorkingReportTemp)
        }}></TextInput>
        <Text style={{marginTop: "auto", marginBottom: "auto"}}>weeks</Text>
        <TextInput style={styles.input} keyboardType='default' onChangeText={(text) => {
          let WorkingReportTemp = Object.assign(ReportInProgress.getWorkingReport())
          WorkingReportTemp["acc2"][1] = text + " days"
          ReportInProgress.setWorkingReport(WorkingReportTemp)
        }}></TextInput>
        <Text style={{marginTop: "auto", marginBottom: "auto"}}>days</Text>
        </View>
        </View>
        <InputQuestion text="How was the floor stacked?" boundValue={"acc3"} />
      <OptionQuestion text="Was the floor covered?" options={ynuOptions} boundValue="acc4" />
      <OptionQuestion text="Were the box ends open?" options={ynuOptions} boundValue="acc5" />
      <InputQuestion text="What was the temperature in the home?" boundValue="acc6" units="°F" />
      </View>
      )}
export default Acclimation

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5555',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
});
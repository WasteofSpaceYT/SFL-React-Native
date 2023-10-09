import { StyleSheet, Text, View, TextInput, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { ReportInProgress } from '../App';
import React, { useState } from 'react';

export default function InputQuestion(props: {text: string, units?: string, children?: any, boundValue: string}) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 50,
          paddingHorizontal: 20,
        },
        input: {
          height: 40,
          margin: 12,
          borderBottomWidth: 1,
          padding: 10,
          width: 100,
          flexDirection: "row",
          flex: 3,
        },
      });
    return (
        <View style={{flexDirection: "row", alignContent: "center"}}>
        <Text style={{marginTop: "auto", marginBottom: "auto", flex: 2}}>{props.text}</Text>
        <TextInput style={styles.input} keyboardType='default' onChangeText={(text) => {
          let WorkingReportTemp = Object.assign(ReportInProgress.getWorkingReport())
          WorkingReportTemp[props.boundValue] = text
          if(props.units != undefined){
            WorkingReportTemp[props.boundValue] = text + ` ${props.units}`
          }
          ReportInProgress.setWorkingReport(WorkingReportTemp)
        }} defaultValue={Object.assign(ReportInProgress.getWorkingReport())[props.boundValue]}></TextInput>
        <Text style={{marginTop: "auto", marginBottom: "auto"}}>{props.units}</Text>
        </View>
    )
}
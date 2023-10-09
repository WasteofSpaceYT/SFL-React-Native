import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Dropdown } from 'react-native-element-dropdown';
import { ReportInProgress } from '../App';

export default function OptionQuestion(props: {text: string, options: {label: string, value: string}[], boundValue: string}) {
    let options = [{label: "Yes", value: "yes"}, {label: "No", value: "no"}, {label: "Unknown", value: "unknown"}]
    const [selected, setSelected] = React.useState(options[0].value);
    let fieldVal = Object.assign(ReportInProgress.getWorkingReport())[props.boundValue]
    const [defOpt, setDefOpt] = useState(null);
    if(fieldVal != null && defOpt == null){
        for(let i = 0; i < options.length; i++){
            if(options[i].value == fieldVal){
                //@ts-ignore
                setDefOpt(options[i])
            }
        }
    }
    return (
        <View>
            <Text>{props.text}</Text>
            {/*@ts-ignore*/}
            <SelectList data={props.options} defaultOption={defOpt} setSelected={(val: React.SetStateAction<string>) => {
                setSelected(val)
                let WorkingReportTemp = Object.assign(ReportInProgress.getWorkingReport())
                WorkingReportTemp[props.boundValue] = val
    ReportInProgress.setWorkingReport(WorkingReportTemp)
    {/*@ts-ignore */}
                }} placeholder={fieldVal} />
        </View>
    )
    }
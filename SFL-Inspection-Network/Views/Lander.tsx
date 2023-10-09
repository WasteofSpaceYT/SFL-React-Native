import { Alert, Modal, TextInput, View } from "react-native";
import { Button, Text } from "react-native-elements";
import React from "react";
import * as FileSystem from "expo-file-system";
import { Report, ReportInProgress, setReportInProgress } from "../App";

export function Lander(props: { callback: Function }) {
  const [showTextField, setShowTextField] = React.useState(false);
  const [titleText, setTitleText] = React.useState("");
  const [typeOfReport, setTypeOfReport] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
    const [itemsToShow, setItemsToShow] = React.useState([] as React.JSX.Element[]);
  let items: React.JSX.Element[] = []
    function callbackSetItemsToShow(items: React.JSX.Element[]){
        setItemsToShow(items)
    }
  return (
    <>
      {/*//@ts-expect-error*/}
      <View style={{ flex: 1, justifyContent: "center" }} gap={25}>
        <Button
          title="New Report"
          onPress={() => {
            setShowTextField(true);
            setTypeOfReport("New");
          }}
        />
        <Button
          title="Recall Report"
          onPress={async () => {
            FileSystem.readDirectoryAsync(FileSystem.documentDirectory! + "reports/").then((val) => {
                console.log(val)
                items = val.map((value) =>  
                    <Button key={value} onPress={() => {
                        FileSystem.readAsStringAsync(FileSystem.documentDirectory! + "reports/" + value).then((rprt) => {
                            console.log(rprt)
                            setReportInProgress(new Report(false, value.replace(".json", ""), JSON.parse(rprt)))
                            props.callback(0)
                        })
                    }} title={value.replace(".json", "")}
                    />
                )
                setModalVisible(true)
                callbackSetItemsToShow(items)
                console.log(items)
            })
          }}
        />
        {showTextField ? (
          <>
            <Text style={{ textAlign: "center" }}>Enter Report Name</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 5,
                padding: 5,
              }}
              onChangeText={(text: string) => {
                setTitleText(text);
              }}
            />
            <Button
              onPress={() => {
                if(titleText != ""){
                        setReportInProgress(new Report(true, titleText))
                        ReportInProgress.setReportName(titleText);
                        setShowTextField(false);
                        props.callback(0)
                } else {
                    Alert.alert("Error", "Please enter a report name")
                }
              }}
              title={"Submit"}
            />
          </>
        ) : null}
        <Modal animationType="slide" visible={modalVisible}>
            <>
            {/*//@ts-expect-error*/}
            <View style={{justifyContent: "center", alignContent: "center", flex: 1, paddingHorizontal: 10}} gap={25}>
            {itemsToShow.length != 0 ? itemsToShow : <Text style={{textAlign: "center"}}>No Reports Found</Text>}
            </View>
            <View style={{flex: 1, justifyContent: "flex-end"}}>
            <Button onPress={() => {setModalVisible(false)}} style={{flex: 1, justifyContent: "flex-end"}} title="Close" />
            </View>
            </>
        </Modal>
      </View>
    </>
  );
}

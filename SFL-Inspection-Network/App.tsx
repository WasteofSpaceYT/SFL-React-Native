import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Modal, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import Acclimation from './Views/Acclimation';
import ClimateControlled from './Views/ClimateControlled';
import SubfloorFlatness from './Views/SubfloorFlatness';
import Underlayment from './Views/Underlayment';
import DirectSunlight from './Views/DirectSunlight';
import ExpansionSpace from './Views/ExpansionSpace';
import MoistureTesting from './Views/MoistureTesting';
import PadsMaintainanceAttic from './Views/PadsMaintainanceAttic';
import HomeInfo from './Views/HomeInfo'
import { Dimensions } from 'react-native';
import { FullObject } from './utilities';
import { Lander } from './Views/Lander';
import * as FileSystem from 'expo-file-system';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, collection } from "firebase/firestore";
import ImageUpload from './ImageUpload';

const firebaseConfig = {

  apiKey: "AIzaSyCmbW7Ryw4W7aEHFm_l84KoLQA_OPJ85rU",

  authDomain: "sfl-inspection-reports.firebaseapp.com",

  projectId: "sfl-inspection-reports",

  storageBucket: "sfl-inspection-reports.appspot.com",

  messagingSenderId: "533229062935",

  appId: "1:533229062935:web:a4161174a2c1c3ddf7c552",

  measurementId: "G-KCSQ1C0STF"

};


export class Report {
  private static newReport: boolean;
  private static reportToRecall: Object
  private static WorkingReport: Object
  private static reportName: string
  public getWorkingReport() {
    return Report.WorkingReport
  }
  public setReportName(name: string) {
    Report.reportName = name
  }
  public setWorkingReport(rprt: Object) {
    Report.WorkingReport = rprt
  }
  public getReportName() {
    return Report.reportName
  }
  constructor(newReport: boolean, name:string, reportToRecall?: Object){
    Report.newReport = newReport;
    if(reportToRecall != null){
      Report.reportToRecall = reportToRecall
      Report.WorkingReport = reportToRecall
      Report.reportName = name
    }
    if(newReport){
      Report.WorkingReport = Object.fromEntries(Object.keys(FullObject).map(k => [k,null]))
    }
  }
}

export let ReportInProgress: Report = new Report(true, "New Report");
export function setReportInProgress(rprt: Report){
  ReportInProgress = rprt
}

export default function App(props: {startIndx?: number}) {
  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  function setScreen(screen: number) {
    setViewNumber(screen)  
    setView(viewList[screen])
  }
  const [view, setView] = useState(<Lander callback={setScreen} />)
const [viewNumber, setViewNumber] = useState(-1)
const [showNameChange, setShowNameChange] = useState(false)
const [reportNameChanged, setReportNameChanged] = useState("")
let viewList: React.JSX.Element[];
if(Dimensions.get("window").height >= 1025) {
  viewList = [<Acclimation />, <ClimateControlled />, <SubfloorFlatness />, <Underlayment />, <DirectSunlight />, <ExpansionSpace first bigEnough />, <MoistureTesting />, <PadsMaintainanceAttic bigEnough />, <HomeInfo />, <ImageUpload />]
  } else {
    viewList = [<Acclimation />, <ClimateControlled />, <SubfloorFlatness />, <Underlayment />, <DirectSunlight />, <ExpansionSpace first bigEnough={false} />, <ExpansionSpace first={false} bigEnough={false} />,<MoistureTesting />, <PadsMaintainanceAttic bigEnough={false} />, <HomeInfo />, <ImageUpload />]
  }
  function handleSubmit(oldName?: string) {
    let nameToUse = ReportInProgress.getReportName()
    if(oldName != undefined){
      nameToUse = oldName
    }
    let docref = doc(db, "reports", nameToUse)
      getDoc(docref).then((doc) => {
        if(doc.exists()){
          setShowNameChange(true)
        } else {
          setDoc(docref, ReportInProgress.getWorkingReport()).then(() => {
            Alert.alert("Submitted", "Submitted Report to " + nameToUse)
            FileSystem.deleteAsync(FileSystem.documentDirectory + "reports/" + ReportInProgress.getReportName() + ".json")
            setView(<Lander callback={setScreen} />)
            setViewNumber(-1)
          })
        }
      })
  }
  return (
    <>
    {/*//@ts-expect-error*/}
    <View style={styles.container} gap={25}>
      <Text style={{fontWeight: "bold", textAlign: 'center'}}>SFL Inspection Network Reports</Text>
      {view}
      <StatusBar style="auto" />
    </View>
    {/*//@ts-expect-error*/}
    <View style={{paddingHorizontal: 20, flex: 1, justifyContent: "flex-end", paddingBottom: 50}} gap={25}>
      {viewNumber < viewList.length - 1 && viewNumber >= 0 ? <Button title="Next" onPress={() => {setView(viewList[viewNumber + 1]);setViewNumber(viewNumber + 1)}} /> : null}
      {/*//@ts-expect-error*/}
      {viewNumber === viewList.length - 1 ? <Button title="Submit" style={styles.submitButton} onPress={() => {Alert.alert("Submit Form", "Are you sure you would like to submit the form?", [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => handleSubmit()},
    ])}} /> : null}
    {/*@ts-ignore*/}
      {viewNumber > 0 ? <Button title="Back" onPress={() => {setView(viewList[viewNumber - 1]);setViewNumber(viewNumber - 1)}} /> : null}
      {viewNumber == viewList.length -1 ? <Button title='Save' onPress={() => {Alert.alert("Save Form", "Are you sure you would like to save the form?", [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: "Save",
        onPress: () => {
          console.log(ReportInProgress.getWorkingReport())
            FileSystem.writeAsStringAsync(FileSystem.documentDirectory + "reports/" + ReportInProgress.getReportName() + ".json", JSON.stringify(ReportInProgress.getWorkingReport())).then(() => {
              Alert.alert("Saved", "Saved Report to " + FileSystem.documentDirectory + "reports/" + ReportInProgress.getReportName() + ".json")
              setView(<Lander callback={setScreen} />)
              setViewNumber(-1)
          }).catch((err) => {
            FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "reports/").then(() => {
              Alert.alert("Retry", "Please try saving again")
            })
          })
        }
      }
      ])}} /> : null}
      <Modal visible={showNameChange}>
        <>
        <View style={{flex: 1, justifyContent: "center", alignContent: "center", paddingHorizontal: 25}}>
        <Text style={{textAlign: "center"}}>Change the Report Name</Text>
        <TextInput placeholder={ReportInProgress.getReportName()} onChangeText={(text) => {
          setReportNameChanged(text)
        }} />
        <Button title='Submit' onPress={() => {
          handleSubmit(reportNameChanged)
          setShowNameChange(false)
        }} />
        </View>
        </>
      </Modal>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  submitButton: {
    justifyContent: "flex-end",
    alignContent: "flex-end"
  }
});
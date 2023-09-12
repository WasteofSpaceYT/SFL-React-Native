import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import InputQuestion from './Components/InputQuestion';

export default function App() {
  return (
    <View style={styles.container} gap={25}>
      <Text style={{fontWeight: "bold", textAlign: 'center'}}>SFL Inspection Network Reports</Text>
      <View style={{flexDirection: "column", alignContent: "center"}}>
      <Text style={{fontWeight: "bold"}}>Acclimation</Text>
      <InputQuestion text="Where in the home was the floor acclimated?" />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
  },
});

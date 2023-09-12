import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function InputQuestion(props) {
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
    
    return (
        <View style={{flexDirection: "row", alignContent: "center"}}>
        <Text style={{marginTop: "auto", marginBottom: "auto"}}>{props.text}</Text>
        <TextInput style={styles.input} keyboardType='default'></TextInput>
        <Text style={{marginTop: "auto", marginBottom: "auto"}}>{props.units}</Text>
        </View>
    )
}
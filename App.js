import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Tasks from './components/Tasks';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>
      <View style={styles.items}>
      <Tasks text={'Task 1'}/>
      <Tasks text={'Task 2'}/>

      </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}
      style = {styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'}></TextInput>
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'

  },
  items: {
    marginTop:30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius:60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  }
});

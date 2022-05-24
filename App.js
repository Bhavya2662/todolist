import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
});

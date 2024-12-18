import './global.css'

import { FussballMatchForm } from 'app/components/forms/MatchForm'
import { StyleSheet, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Press me" variant="primary" onPress={() => console.log('Button pressed')} /> */}

      <FussballMatchForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

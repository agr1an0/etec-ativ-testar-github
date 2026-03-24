import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const tarefas = [
    {id: "1", titulo: "aprender Git"
    },
    {id: "2", titulo: "aprender a fazer commit" 
    },
    {id: "3", titulo: "aprender a utilizar o github"
    },
  ]
  return (
    <View style = {styles.container1}>
      <Text style = {styles.titulo}>Lista de tarefas</Text>
      <FlatList 
      data={tarefas}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Text style={styles.titulo}> {item.titulo}</Text>
      )}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  titulo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom:20
  },
});

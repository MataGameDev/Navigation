import React from 'react';
import {Button, View, Text} from 'react-native'; 
import styles from './styles';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}> Home </Text>
        <Button 
              title='ir al Menu de Tareas'
              onPress={() => navigation.navigate('Menu') }
        />
    </View>
  );
}

export default HomeScreen;

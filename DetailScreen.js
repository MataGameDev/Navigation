import React from 'react';
import {Button,View, Text} from 'react-native';
import styles from './styles';

function DetailScreen({route, navigation}){
  const {id, descripcion} = route.params;
  return(
  <View style={styles.container}>
    <Text style={styles.texto}>Tarea #{id} </Text>
    <Text style={styles.texto}>Descripcion: {descripcion} </Text>
        <View style={styles.footer}>
          <Button
             title='Atras'
             onPress={() => navigation.goBack() }
          />

          <Button
             title='Ir a menu'
             onPress={() => navigation.popToTop() }
          />
        </View>
  </View>
  );
}
export default DetailScreen;


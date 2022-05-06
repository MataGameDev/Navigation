import React from 'react';
import {StyleSheet,Button,View, Text} from 'react-native';

function DetailScreen ({route,navigation}) {
    const {id, description} = route.params;

    return (
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'violet'}}>
            <Text>Details Screen</Text>
            <Text>Screen: {id}</Text>
            <Text>Description: {description}</Text>

            <View style={styles.containerButton}>
            <Button
                color="#1e88e5"
                title="Tarea 1"
                onPress={() => navigation.push('Details',{
                    id:1,
                    description: "Ir de Compras"
                })}
            />
            <Button
                color="#1e88e5"
                title="Tarea 2"
                onPress={() => navigation.push('Details',{
                    id:2,
                    description: "Salir a jugar"
                })}
            />
            <Button
                color="#1e88e5"
                title="Tarea 3"
                onPress={() => navigation.push('Details',{
                    id:3,
                    description: "Ir a clase"
                })}
            />
            </View>

            <View style={styles.containerButton}>
            <Button 
                title="Atras"
                onPress={() => navigation.goBack()}
            />
            <Button 
                title="Ir a Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button 
                title="Mantenerse en Detalle"
                onPress={() => navigation.push('Details')}
            />
            </View>

            <Button
                title="Inicio"
                onPress={() => navigation.popToTop('Home')}
            />

        </View>
    );
};
const styles = StyleSheet.create({
    containerButton:{
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: '#283593',
        margin:20,
        padding: 5,
        width: 300,
        height: 100,
    
    }
})
export default DetailScreen;
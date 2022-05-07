import React from 'react';
import {Button, View, Text} from 'react-native'; 

function Footer({navigation}){
    return (
        <View >
            <Button
             title='Volver'
             onPress={() => navigation.navigate('Menu') }
            />

            <Button
             title='Ir a menu'
             onPress={() => navigation.popToTop() }
            />
        </View>
    )
}

export default Footer;
import React from 'react';
import {Button,View, Text} from 'react-native';
import styles from './styles';
import Box from './components/Box';
import Row from './components/Row';

function MenuScreen({ navigation}){
    return(
        <View style={styles.container}>
          <Row >
            <Box>
              <Button 
              color = '#005688'
              title='Tarea 1'
              onPress={() => navigation.push('Detalles', {id:1, descripcion: "Jugar Destiny 2"})}
              />
            </Box>

            <Box>
              <Button 
               color = '#005688'
              title='Tarea 2'
              onPress={() => navigation.push('Detalles', {id:2, descripcion: "Comprar Leche"})}
              />
            </Box>

            <Box>
              <Button 
              color = '#005688'
              title='Tarea 3'
              onPress={() => navigation.push('Detalles', {id:3, descripcion: "Hacer la Tarea de Web"})}
              />
            </Box>
          </Row>

        <Row >
            <Box>
              <Button 
               color = '#005688'
              title='Tarea 4'
              onPress={() => navigation.push('Detalles', {id:4, descripcion: "Terminar el Codigo de Matematicas"})}
              />
            </Box>

          <Box>
            <Button 
             color = '#005688'
            title='Tarea 5'
            onPress={() => navigation.push('Detalles', {id:5, descripcion: "Terminar de Pintar"})}
            />
          </Box>

          <Box>
            <Button 
             color = '#005688'
            title='Tarea 6'
            onPress={() => navigation.push('Detalles', {id:6, descripcion: "Alimentar al Gato"})}
            />
          </Box>
        </Row>

        <Row>  
          <Box>
            <Button 
             color = '#005688'
            title='Tarea 7'
            onPress={() => navigation.push('Detalles', {id:7, descripcion: "Terminar el GDD"})}
            />
          </Box>

          <Box>
            <Button 
             color = '#005688'
            title='Tarea 8'
            onPress={() => navigation.push('Detalles', {id:8, descripcion: "Tender la cama"})}
            />
          </Box>

          <Box>
            <Button 
            color = '#005688'
            title='Tarea 9'
            onPress={() => navigation.push('Detalles', {id:3, descripcion: "Limpiar la habitacion"})}
            />
          </Box>
        </Row>

        <View style={styles.footer}>
          <Button
            title='Volver'
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



export default MenuScreen;


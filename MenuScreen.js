import React from 'react';
import {Button,View, Text} from 'react-native';
import styles from './style';
import Box from './components/Box';
import Row from './components/Row';

function MenuScreen({ navigation}){
    return(
        <View style={styles.container}>
          <Row >
            <Box>
              <Button 
              color = '#009688'
              title='Tarea 1'
              onPress={() => navigation.push('Detalle', {id:1, description: "hacer tarea"})}
              />
            </Box>

            <Box>
              <Button 
               color = '#009688'
              title='Tarea 2'
              onPress={() => navigation.push('Detalle', {id:2, description: "hacer mandado"})}
              />
            </Box>

            <Box>
              <Button 
              color = '#009688'
              title='Tarea 3'
              onPress={() => navigation.push('Detalle', {id:3, description: "hacer comida"})}
              />
            </Box>
          </Row>

        <Row >
            <Box>
              <Button 
               color = '#009688'
              title='Tarea 4'
              onPress={() => navigation.push('Detalle', {id:4, description: "estudiar"})}
              />
            </Box>

          <Box>
            <Button 
             color = '#009688'
            title='Tarea 5'
            onPress={() => navigation.push('Detalle', {id:5, description: "hacer ejercicio"})}
            />
          </Box>

          <Box>
            <Button 
             color = '#009688'
            title='Tarea 6'
            onPress={() => navigation.push('Detalle', {id:6, description: "sacar la basura"})}
            />
          </Box>
        </Row>

        <Row>  
          <Box>
            <Button 
             color = '#009688'
            title='Tarea 7'
            onPress={() => navigation.push('Detalle', {id:7, description: "pasear al perro"})}
            />
          </Box>

          <Box>
            <Button 
             color = '#009688'
            title='Tarea 8'
            onPress={() => navigation.push('Detalle', {id:8, description: "limpiar el cuarto"})}
            />
          </Box>

          <Box>
            <Button 
            color = '#009688'
            title='Tarea 9'
            onPress={() => navigation.push('Detalle', {id:3, description: "lavar la ropa"})}
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

import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';

const Header = () => {
    const onPress = () => console.log('t');
    return (
        <View style={styles.header}>
            <Image 
                style={{width: 60, height:60}}
                source={require('./image/logo.png')}/>
            <View style={styles.headerbuttons}>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
            <Icons name="plus" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
               <Icon name="search" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                <Icons name="more-vertical" size={25} color="#000" />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   header:{
       display: 'flex',
       alignItems: 'center',
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginHorizontal: 20,
       marginTop:25,
   },
   headerbuttons:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
   },
   btn:{
       marginRight: 10,
   },
  });
  
export default Header

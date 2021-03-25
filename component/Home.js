import React from 'react'
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import Carousel from './Carousel'
import Header from './Header'
const { width, height } = Dimensions.get('screen');

const Home = () => {
    return (
        <>
        <Header/>
        <View style={{flexDirection:'row', marginHorizontal:20, marginTop: 10}}>
            
            <TouchableOpacity
                style={{paddingRight:9}}
                
            >
              <Text>전체</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{paddingRight:9}}
               
            >
              <Text>진행중</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{paddingRight:10}}
               
            >
              <Text>종료</Text>
            </TouchableOpacity>
        </View>
        <Carousel/>
        </>
    )
}


export default Home

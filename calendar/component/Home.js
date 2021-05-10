import React from 'react'
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import Carousel from './Carousel'
import Header from './Header'
import Circle from './circularPercent'

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
        <View style={styles.boxs}>
          <View style={styles.circlebox}>
            <Text>진행도</Text>
            <Circle percent={70}/>
          </View>
          <View style={styles.circlebox}>
            <Text>달성도</Text>
            <Circle percent={80}/>
          </View>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
  boxs:{
    flexDirection:'row',
    justifyContent:'center'
  },
  circlebox:{
    width: width*0.45,
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    marginLeft: 5,
    borderRadius: 20,
    alignItems: 'center',
    padding: 5
  },
});


export default Home

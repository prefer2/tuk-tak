// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, TouchableOpacity, Text, ImageBackground} from 'react-native';

const weekDays = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
]; 

const image = { uri: "https://reactjs.org/logo-og.png" };

const MyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState('');
  const [thisWeek, setThisWeek] = useState('');
  const [thisDay, setThisDay] = useState('');


  useEffect(() => {
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let firstDay = new Date('March 1, 2021').getDay();
  
    
    setCurrentMonth(year+'.'+month);

    let finalDay = 31;
    let day=1;
    let rows=[];

    while(day<finalDay){
        for(let i=0;i<7;i++){
                if(day==1&&i!=firstDay||day>finalDay){
                    rows.push(<TouchableOpacity style={styles.oneday}><Text> </Text></TouchableOpacity>);
                }
                else{
                    rows.push(<TouchableOpacity style={styles.oneday}>
                     <ImageBackground source={require("./image/logo.png")} style={{width:40, height:40, borderRadius: 100}}>
                         <Text>{day}</Text>
                     </ImageBackground>
                    </TouchableOpacity>);
                    day++;
                }
            }
           
            rows.push(<Text> </Text>);
        }
        setThisWeek(rows);
    
    }, []);


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>{currentMonth}</Text>
        <View>
            <View style={styles.oneweek}>
                <TouchableOpacity style={styles.oneday}><Text style={styles.sunday}>{weekDays[0]}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.oneday}><Text>{weekDays[1]}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.oneday}><Text>{weekDays[2]}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.oneday}><Text>{weekDays[3]}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.oneday}><Text>{weekDays[4]}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.oneday}><Text>{weekDays[5]}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.oneday}><Text style={styles.saterday}>{weekDays[6]}</Text></TouchableOpacity>
            </View>
            <View style={styles.oneweek}>
            <Text>{thisWeek}</Text>
            </View>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  oneweek:{
      flexDirection: 'row'
  },
  oneday:{
      width:40,
      height:40
  },

  sunday:{
      color:'red'
  },
  saterday:{
      color:'blue'
  }
});

export default MyCalendar
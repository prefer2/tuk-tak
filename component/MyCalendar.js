// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, TouchableOpacity, Text, ImageBackground, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

const weekDays = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
]; 



const MyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [thisWeek, setThisWeek] = useState('');
  const [thisDay, setThisDay] = useState('');


  useEffect(() => {
    let date = new Date() //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  
    
    setCurrentMonth(month);
    setCurrentYear(year);

    const finalDay = [31,28,31,30,31,30,31,31,30,31,30,31];
    let day=1;
    let rows=[];

    while(day<=finalDay[month-1]){
        for(let i=0;i<7;i++){
                if(day==1&&i!=firstDay||day>finalDay[month-1]){
                    rows.push(<TouchableOpacity style={styles.oneday}><Text> </Text></TouchableOpacity>);
                }
                else{
                    rows.push(<TouchableOpacity style={styles.oneday}>
                     <ImageBackground source={require("./image/food.jpg")} style={styles.photo}>
                         <Text style={styles.mybutton}>{day}</Text>
                     </ImageBackground>
                    </TouchableOpacity>);
                    day++;
                }
            }
           
            rows.push(<Text> </Text>);
        }
        setThisWeek(rows);
    
    }, []);

    const addMonth=()=>{
      let year=new Date().getFullYear();
      let month =currentMonth;

     if(month==12){
       year=year+1;
       month=1;
       setCurrentMonth(month);
       setCurrentYear(year);
     }
     else{
      setCurrentMonth(currentMonth+1);
      month=currentMonth;
     }
     
      let firstDay = new Date(year, month, 1).getDay();
      const finalDay = [31,28,31,30,31,30,31,31,30,31,30,31];
      let day=1;
      let rows=[];
      
  
      while(day<=finalDay[month]){
          for(let i=0;i<7;i++){
                  if(day==1&&i!=firstDay||day>finalDay[month]){
                      rows.push(<TouchableOpacity style={styles.oneday}><Text> </Text></TouchableOpacity>);
                  }
                  else{
                      rows.push(<TouchableOpacity style={styles.oneday}>
                      <ImageBackground source={require("./image/food.jpg")} style={styles.photo}>
                          <Text style={styles.mybutton}>{day}</Text>
                      </ImageBackground>
                      </TouchableOpacity>);
                      day++;
                  }
              }
            
              rows.push(<Text></Text>);
          }
          setThisWeek(rows);
    };

    const subMonth=()=>{
      let year=new Date().getFullYear();
      let month =currentMonth;

      if(currentMonth==1){
        setCurrentMonth(12);
        month =12;
        setCurrentYear(year-1);
        year=year-1;
      }
      else{
        setCurrentMonth(currentMonth-1);
        month =currentMonth-1;
      }
     
     
      let firstDay = new Date(year, month-1, 1).getDay();
      const finalDay = [31,28,31,30,31,30,31,31,30,31,30,31];
      let day=1;
      let rows=[];
      
  
      while(day<=finalDay[month-1]){
          for(let i=0;i<7;i++){
                  if(day==1&&i!=firstDay||day>finalDay[month-1]){
                      rows.push(<TouchableOpacity style={styles.oneday}><Text> </Text></TouchableOpacity>);
                  }
                  else{
                      rows.push(<TouchableOpacity style={styles.oneday}>
                      <ImageBackground source={require("./image/food.jpg")} style={styles.photo}>
                          <Text style={styles.mybutton}>{day}</Text>
                      </ImageBackground>
                      </TouchableOpacity>);
                      day++;
                  }
              }
            
              rows.push(<Text> </Text>);
          }
          setThisWeek(rows);
    };

    const renderItem = ({ item }) => (
      <Text style={{width:50, height:30, alignContent:'center', alignItems:'center'}}>{item}</Text>
    );

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            alert(new Date);
          }}
          
        ><Text>Today</Text></TouchableOpacity>
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
        <TouchableOpacity onPress={() => {
            subMonth()
          }}
          style={{marginRight:10}}
        ><Text><Icons name="left" size={20} color="#000" /></Text></TouchableOpacity>
        <Text style={styles.textStyle}>{currentYear}.{currentMonth}</Text>
        <TouchableOpacity onPress={() => {
            addMonth()
          }}
          style={{marginLeft:10}}
        ><Text><Icons name="right" size={20} color="#000" /></Text></TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <FlatList
                data={weekDays}
                renderItem={renderItem}  
                keyExtractor={(_, index)=>index.toString()}
                horizontal
                style={styles.week}
              />
            <Text style={{width:355}}>{thisWeek}</Text>
    
        </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    top: 50
    
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  oneweek:{
      borderWidth:2
  },
  oneday:{
      width:50,
      height:70
  },

  sunday:{
      color:'red'
  },
  saterday:{
      color:'blue'
  },
  week:{
    paddingHorizontal: 10
  },
  mybutton:{
    color:'white',
    padding:13,
    fontWeight:'bold'
   
  },
  photo:{
    width:42, height:42, borderRadius: 42/2,overflow: "hidden", borderWidth: 0.1}

});

export default MyCalendar
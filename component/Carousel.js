import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = [
    'https://dummyimage.com/250/ffffff/000000',
    'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'

];


const imageW = width * 0.6;
const fake_len = (width - imageW) /2


const Carousel = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
   
    return (
        <View style={{ flex: 1, marginHorizontal: 20}}>
           
            <StatusBar hidden />
            <Animated.FlatList
                data={data}
                keyExtractor={(_, index)=>index.toString()}
                horizontal
                pagingEnabled
                snapToInterval={imageW}
                decelerationRate={0}
                bounces={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset : { x: scrollX}}}],
                    {useNativeDriver: true}
                )}
                scrollEventThrottle={16}

                renderItem={({item, index})=>{
                    if(index===0){
                        return <View style={{ width: fake_len-20 }} />;
                    }
                    const inputRange=[
                        (index - 2) * imageW,
                        (index - 1) * imageW,
                        (index) * imageW,
                    ];

                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [100, 90, 100],
                        extrapolate: 'clamp',
                      });

                    return (
                    <View style={{width: imageW}}>
                        <Animated.View style={{
                            alignItems:'center',
                            transform:[{translateY}],
                            }}>
                        
                        <Image source={{uri: item}} 
                        style={{
                            width: imageW-5,
                            height: imageW-5,
                            borderRadius: 10,
                        }}/>
                        </Animated.View>
                    </View>
                        )
                }}
            />
        </View>
    );
}

export default Carousel

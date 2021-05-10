import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

/**
* Function that calculates rotation of the semicircle for firstProgressLayer
* ( when percent is less than equal to 50 ) or for the secondProgressLayer
* when percent is greater than 50.
**/
const rotateByStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + (percent * 3.6);
  return {
    transform:[{rotateZ: `${rotateBy}deg`}]
  };
}

const renderThirdLayer = (percent, commonStyles, ringColorStyle, ringBgColorStyle) => {
  if(percent > 50){
    /**
    * Third layer circles default rotation is 45 degrees, so by default it occupies the right half semicircle.
    * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
    * before passing to the rotateByStyle function
    **/
    return <View style={[styles.secondProgressLayer,rotateByStyle((percent - 50), 45), commonStyles, ringColorStyle ]}></View>
  }else{
    return <View style={[styles.offsetLayer, commonStyles, ringBgColorStyle]}></View>
  }
}

const circularPercent = ({percent, radius, ringWidth, ringColor, ringBgColor, textFontSize, textFontWeight}) => {
  const commonStyles = {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    borderWidth: ringWidth
  };

  const ringColorStyle = {
    borderRightColor: ringColor,
    borderTopColor: ringColor,
  };

  const ringBgColorStyle = {
    borderRightColor: ringBgColor,
    borderTopColor: ringBgColor,
  };

  const DEFAULT_DEG_ROTATION = -135;
  let firstProgressLayerStyle;
  if(percent > 50){
      firstProgressLayerStyle = rotateByStyle(50, DEFAULT_DEG_ROTATION);
  }else {
    firstProgressLayerStyle = rotateByStyle(percent, DEFAULT_DEG_ROTATION);
  }

  return(
    <View style={[styles.container, commonStyles, {borderColor: ringBgColor}]}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle, commonStyles, ringColorStyle]}></View>
      {renderThirdLayer(percent, commonStyles, ringColorStyle, ringBgColorStyle)}
      <Text style={[styles.display, {fontSize: textFontSize,fontWeight: textFontWeight}]}>{percent}%</Text>
    </View>
  );
}

// default values for props
circularPercent.defaultProps = {
  percent: 0,
  radius: 65,
  ringWidth: 20,
  ringColor: '#917EFB',
  ringBgColor: 'lightgrey',
  textFontSize: 30,
  textFontWeight: 'bold'
}

/**
* offsetLayer has transform:[{rotateZ: '-135deg'}] since
* the offsetLayer rotation is fixed by us.
**/
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstProgressLayer: {
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  secondProgressLayer:{
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  offsetLayer: {
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    transform:[{rotateZ: '-135deg'}]
  },
  display: {
    position: 'absolute'
  }
});

export default circularPercent

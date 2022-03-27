import React, {Component} from 'react';
import {useState} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel'; // Version can be specified in package.json
import {scrollInterpolator, animatedStyles} from './utils/animations';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SliderHeight = Dimensions.get('window').height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 4) / 5);

const DATA = [];
for (let i = 0; i < 3; i++) {
  DATA.push(i);
}
const messages = ['Algorithm','Matches','Third']
const subMessages = ['Users going through a numerology process to ensure you never match with bots.',
'We match you with people that have a large array of similar interests',
'We match you with people that have a large array of similar interests.']
const CarouselItem = Params => {
  return (
    <View style={styles.itemContainer}>
      <View
        style={[
          {width: '90%', height: '100%', backgroundColor: 'gray',borderRadius:15},
        ]}></View>
    </View>
  );
};
const MainCarousel = params => {
  [index, setIndex] = useState(0);
  return (
    <View>
      <Carousel
        ref={c => (this.carousel = c)}
        data={DATA}
        renderItem={CarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        onSnapToItem={index => setIndex(index)}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
      />
      <Text style={styles.counter}>{messages[index]}</Text>
      <View style = {[{width:SLIDER_WIDTH-80,alignItems:'center',justifyContent:'center',marginLeft:40,marginRight:40,}]}>
        <Text style={styles.subHeading}>{subMessages[index]}</Text>
      </View>
     

      <Pagination
              dotsLength={DATA.length}
              activeDotIndex={index}
              containerStyle={{ backgroundColor: 'transparent'}}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal:1,
                  backgroundColor: '#FFC700'
              }}
              inactiveDotStyle={{
                backgroundColor: 'gray',
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
    </View>
  );
};

// export default class App extends Component {

//   state = {
//     index: 0
//   }

//   constructor(props) {
//     super(props);
//     this._renderItem = this._renderItem.bind(this)
//   }

//   _renderItem({ item }) {
//     return (

//     );
//   }
//    get pagination () {
//         const { entries, activeSlide } = this.state;
//         return (
//             <Pagination
//               dotsLength={entries.length}
//               activeDotIndex={activeSlide}
//               containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
//               dotStyle={{
//                   width: 10,
//                   height: 10,
//                   borderRadius: 5,
//                   marginHorizontal: 8,
//                   backgroundColor: 'rgba(255, 255, 255, 0.92)'
//               }}
//               inactiveDotStyle={{
//                   // Define styles for inactive dots here
//               }}
//               inactiveDotOpacity={0.4}
//               inactiveDotScale={0.6}
//             />
//         );
//     }

//   render() {
//     return (

//     );
//   }
// }

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: SliderHeight*0.40,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'clear',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 45,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#FFC700'
  },
  subHeading: {
    marginTop: 25,
    fontSize: 14,
    textAlign: 'center',
    color:'black'
  },
});

export default MainCarousel;

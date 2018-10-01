
import { TabNavigator} from 'react-navigation';
import {Platform} from 'react-native';
import {colors, dimensions} from '../styles/base.js';
import FEED from './Feed';
import CATEGORY from './Category';
import FAVOURITE from './Favourite';

export default  Tabs = TabNavigator(
  {
    FEED : FEED,
    CATEGORY: CATEGORY,
    FAVOURITE: FAVOURITE
  },
  {
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'top',  // So your Android tabs go bottom
    tabBarOptions: {
      activeTintColor: colors.white,  // Color of tab when pressed
      inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
      // Shows an icon for both iOS and Android
      showLabel: true, //No label for Android
      labelStyle: {
        fontSize: 13,
        bottom: 10
      },
      style: {
        backgroundColor: colors.themeColor,
        borderTopColor: colors.themeColor,
        borderBottomColor: colors.themeColor,
        borderTopWidth: 1, // Makes Android tab bar white instead of standard blue
        height: (Platform.OS === 'ios') ? 48 : 50 // I didn't use this in my app, so the numbers may be off. 
      },
      indicatorStyle: {
        backgroundColor: 'black',
    }
    },
});
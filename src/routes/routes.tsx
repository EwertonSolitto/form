import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@screens/home/Home";
import Logged from "@screens/logged/Logged";
import SignIn from "@screens/signin/SignIn";
import SignUp from "@screens/signup/SignUp";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Home',
        headerShown: false
      },
    },  
    Logged: {
      screen: Logged,
      options: {
        title: 'Logged',
        headerShown: false
      },
    },  
    SignIn: {
      screen: SignIn,
      options: {
        title: 'SignIn',
        headerShown: false
      },
    },  
    SignUp: {
      screen: SignUp,
      options: {
        title: 'SignUp',
        headerShown: false
      },
    },  
  },
});

export default RootStack
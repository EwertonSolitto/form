import Home from "./src/screens/home/Home"

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logged from "./src/screens/logged/Logged";
import SignIn from "./src/screens/signin/SignIn";
import SignUp from "./src/screens/signup/SignUp";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Home',
      },
    },  
    Logged: {
      screen: Logged,
      options: {
        title: 'Logged',
      },
    },  
    SignIn: {
      screen: SignIn,
      options: {
        title: 'SignIn',
      },
    },  
    SignUp: {
      screen: SignUp,
      options: {
        title: 'SignUp',
      },
    },  
  },
});

const Navigation = createStaticNavigation(RootStack);


export default function App() {


  return (
    <Navigation />
  );
}

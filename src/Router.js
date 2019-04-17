import React from 'react';
import { Actions, Drawer, Router, Scene } from 'react-native-router-flux';
import { menuBurger } from '../images';
import { 
  LoginForm, 
  SplashScreen, 
  DrawerContent,  
  Main,
} from './components';

const sceneConfig = {
  cardStyle: {
    backgroundColor: 'white'
  },
  navigationBarStyle: {
    backgroundColor: '#EFEFEF'
  }, 
  titleStyle: {
    color: 'black',
  },
  sceneStyle: {
    backgroundColor: 'white'
  },
  rightButtonTextStyle: {
    color: 'black',
  }
};

const RouterComponent = () => {
  return (
    <Router 
      tintColor='black' 
      backAndroidHandler={() => {
        if (Actions.currentScene === 'login' || Actions.currentScene === 'cards' || Actions.currentScene === 'splash') {
          return false;
        }
        Actions.pop();
        return true;
      }}
    >
      <Scene key="root" hideNavBar>
        <Scene key="splash" {...sceneConfig} initial>
          <Scene hideNavBar key="splashScreen" component={SplashScreen} />
        </Scene>
        <Scene key="auth" {...sceneConfig}>
          <Scene hideNavBar key="login" component={LoginForm} />
        </Scene>
        <Scene key="main" {...sceneConfig}>
          <Drawer hideNavBar key="drawer" contentComponent={DrawerContent} drawerImage={menuBurger} drawerWidth={300}>
            <Scene key="cards" component={Main} title="Cards" {...sceneConfig} />
          </Drawer>
        </Scene>
        
      </Scene>
    </Router>
  );
};

export default RouterComponent;

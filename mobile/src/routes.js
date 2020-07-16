import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './Screens/Main/index';
import List from './Screens/Task/list';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    List,
  }),
);

export default Routes;

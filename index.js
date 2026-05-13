/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './Screens/App';
import { name as appName } from './app.json';
import Chats from './Screens/chats';
import Password from './Screens/password';
import Shopping from './Screens/Shoppping';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Chats);
// AppRegistry.registerComponent(appName, () => Password);
AppRegistry.registerComponent(appName, () => Shopping);
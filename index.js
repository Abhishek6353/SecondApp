/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './Screens/App';
import { name as appName } from './app.json';
import Chats from './Screens/chats';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Chats);
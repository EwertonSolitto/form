import { createStaticNavigation } from '@react-navigation/native';
import RootStack from './routes';

const Navigation = createStaticNavigation(RootStack);

export default Navigation
import AboutUs from 'screens/AboutUs';
import Home from 'screens/Home';
import UsefulComponents from 'screens/UsefulComponents';
import { ABOUT_US, HOME, USEFUL_COMPONENTS } from 'utils/route';
import IScreens from './IScreens';

const authScreens: IScreens[] = [
  {
    name: ABOUT_US,
    component: AboutUs,
  },
  {
    name: HOME,
    component: Home,
  },
  {
    name: USEFUL_COMPONENTS,
    component: UsefulComponents,
  },
];

export default authScreens;

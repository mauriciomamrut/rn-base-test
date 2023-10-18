import { ImageSourcePropType } from 'react-native';

import {
  ABOUT_US,
  ABOUT_US_STACK,
  HOME,
  HOME_STACK,
  USEFUL_COMPONENTS,
  USEFUL_COMPONENTS_STACK,
} from 'utils/route';
import {
  Cubes,
  CubesInactive,
  Home,
  HomeInactive,
  InfoCircle,
  InfoCircleInactive,
} from 'assets';
import i18n from 'translations';
import AboutUsStack from 'navigation/stacks/AboutUsStack';
import HomeStack from 'navigation/stacks/HomeStack';
import UsefulComponentsStack from 'navigation/stacks/UsefulComponentsStack';
import IScreens from './IScreens';

export interface ITabScreens extends IScreens {
  default: string;
  images: {
    active: ImageSourcePropType;
    inactive: ImageSourcePropType;
  };
  title: string;
}

const tabScreens: ITabScreens[] = [
  {
    component: HomeStack,
    default: HOME,
    images: {
      active: Home,
      inactive: HomeInactive,
    },
    name: HOME_STACK,
    title: i18n.t('home.title'),
  },
  {
    component: UsefulComponentsStack,
    default: USEFUL_COMPONENTS,
    images: {
      active: Cubes,
      inactive: CubesInactive,
    },
    name: USEFUL_COMPONENTS_STACK,
    title: i18n.t('useful-components.title'),
  },
  {
    component: AboutUsStack,
    default: ABOUT_US,
    images: {
      active: InfoCircle,
      inactive: InfoCircleInactive,
    },
    name: ABOUT_US_STACK,
    title: i18n.t('about-us.title'),
  },
];

export default tabScreens;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, Text } from 'react-native';
import Config from 'react-native-config';

import QueryExample from 'components/QueryExample';

import spacingStyles from 'styles/spacing';
import styles from './styles';

const Home = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={spacingStyles.mainScreen}>
      <View style={styles.container}>
        <Text>{t('home.title')}</Text>
        <View>
          <Text>We&#39;ve integrated react-native-config for you</Text>
          <Text>{`Variable API_URL value is: ${Config.API_URL}`}</Text>
          <Text>
            {`Variable GOOGLE_MAPS_API_KEY value is: ${Config.GOOGLE_MAPS_API_KEY}`}
          </Text>
        </View>
        <View style={styles.queryExampleContainer}>
          <QueryExample />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

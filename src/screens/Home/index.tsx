import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, Text } from 'react-native';

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
          <Text>Test every component</Text>
        </View>
        <View style={styles.queryExampleContainer}>
          <QueryExample />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

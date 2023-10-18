import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  ScrollView,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import { Close } from 'assets';

import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Modal from 'components/Modal';
import styles from './styles';

const UsefulComponents = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}
      >
        <View style={styles.backgroundStyle}>
          <View style={styles.sectionContainer}>
            <View style={styles.componentContainer}>
              <Text style={styles.subtitle}>Avatar:</Text>
              <Avatar />
            </View>
            <View style={styles.componentContainer}>
              <Text style={styles.subtitle}>Button:</Text>
              <Button
                label="Test"
                onPress={() => Alert.alert('Button clicked!')}
              />
            </View>
            <View style={styles.componentContainer}>
              <Text style={styles.subtitle}>Modal:</Text>
              <Button label="Open modal" onPress={openModal} />
              <Modal visible={modalVisible} setVisible={setModalVisible}>
                <View style={styles.modalView}>
                  <Pressable onPress={closeModal} style={styles.close}>
                    <Image source={Close} style={styles.closeImage} />
                  </Pressable>
                  <Text style={styles.modalTitle}>Hi this is a modal!</Text>
                  <Text style={styles.modalText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <Button
                    label="Hide modal"
                    onPress={() => setModalVisible(false)}
                  />
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UsefulComponents;

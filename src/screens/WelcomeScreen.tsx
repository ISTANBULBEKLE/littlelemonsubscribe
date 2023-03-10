import * as React from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  // Add welcome screen code here.
  return (
    <View>
      <Image
        style={welcomeStyles.logo}
        source={require('../assets/little-lemon-logo.png')}
      />
      <Text style={welcomeStyles.introText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        style={welcomeStyles.pressableArea}
        onPress={() => navigation.navigate('Subscribe')}>
        <Text style={welcomeStyles.pressableText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const welcomeStyles = StyleSheet.create({
  logo: {
    width: 150,
    height: 300,
    resizeMode: 'center',
    marginTop: 50,
    alignSelf: 'center',
  },
  introText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
    alignSelf: 'center',
  },
  pressableArea: {
    alignSelf: 'center',
    backgroundColor: 'green',
    paddingVertical: 10,
    borderRadius: 10,
    width: 300,
  },
  pressableText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default WelcomeScreen;

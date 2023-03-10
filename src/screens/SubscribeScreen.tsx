import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import {validateEmail} from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [subscribe, onSubmitSubscribe] = useState('');
  const isEmailValid = validateEmail(subscribe);

  return (
    <View>
      <Image
        style={subscribeStyles.logo}
        source={require('../assets/little-lemon-logo-grey.png')}
      />
      <Text style={subscribeStyles.introText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={subscribeStyles.inputTextStyle}
        value={subscribe}
        onChangeText={onSubmitSubscribe}
        placeholder="enter your email address"
        keyboardType="email-address"
      />
      <Pressable
        style={[
          subscribeStyles.pressableArea,
          !isEmailValid && subscribeStyles.dissablePressableArea,
        ]}
        disabled={!isEmailValid}
        onPress={() => Alert.alert('Thanks for subscribing, stay tunned!')}>
        <Text style={subscribeStyles.pressableText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};
const subscribeStyles = StyleSheet.create({
  logo: {
    width: 150,
    height: 300,
    resizeMode: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  introText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  inputTextStyle: {
    alignSelf: 'center',
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  pressableArea: {
    alignSelf: 'center',
    backgroundColor: 'green',
    paddingVertical: 10,
    borderRadius: 10,
    width: 300,
  },
  dissablePressableArea: {
    backgroundColor: 'grey',
  },
  pressableText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default SubscribeScreen;

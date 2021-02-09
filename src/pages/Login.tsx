import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Animated,
  Keyboard,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [openEditInput, setOpenEditInput] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setOpenEditInput(true);
  };

  const _keyboardDidHide = () => {
    setOpenEditInput(false);
  };

  return (
    <View style={styles.container}>
      <Image
        style={openEditInput ? styles.logoOnInputEditing : styles.logo}
        source={require('../images/LogoSmall.png')}
      />
      <View
        style={openEditInput ? styles.inputOnEditing : styles.containerInput}
      >
        <Sae
          label={'Usuário'}
          iconClass={FontAwesomeIcon}
          // onTouchStart={() => {setOpenEditInput(true)}}
          iconName={'user'}
          iconColor={'#6D6DBA'}
          style={styles.input}
          inputPadding={16}
          labelHeight={24}
          value={user}
          onChangeText={setUser}
          // active border height
          borderHeight={2}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          labelStyle={{ alignItems: 'center' }}
          inputStyle={{ color: '#6D6DBA' }}
        />
        <Sae
          label={'Senha'}
          iconClass={FontAwesomeIcon}
          iconName={'password'}
          iconColor={'#6D6DBA'}
          style={styles.input}
          inputPadding={16}
          labelHeight={24}
          value={password}
          onChangeText={setPassword}
          textContentType={'password'}
          secureTextEntry
          // active border height
          borderHeight={2}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
          labelStyle={{ alignItems: 'center' }}
          inputStyle={{ color: '#6D6DBA' }}
        />

        <RectButton
          style={[styles.button]}
          onPress={() => {
            navigation.navigate('menu');
          }}
        >
          <Text>Logar</Text>
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D6DBA',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'relative',
  },
  input: {
    width: '80%',
    height: 56,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#040000',
    margin: 10,
  },
  inputOnEditing: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 250,
  },
  button: {
    backgroundColor: '#fff',
    height: 56,
    width: '80%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  containerInput: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // top: 350,
  },
  logoOnInputEditing: {
    width: 200,
    height: 150,
    // position: "absolute",
    // top: 90,
  },
  logo: {
    width: 300,
    height: 200,
    // position: 'absolute',
    // top: 130,
  },
});

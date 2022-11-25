import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Images from '../../assets';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.containers}>
        <Image source={Images.ILLLogin} style={styles.Images} />
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Email anda"
          keyboardType="email-address"
          onChange={setEmail}
          value={email}
          style={styles.emailInput}
        />
        <TextInput
          placeholder="Password anda"
          secureTextEntry
          onChange={setPassword}
          value={password}
          style={styles.passwordInput}
        />
        <Text style={styles.buttonForget}>Lupa kata sandi?</Text>
        <TouchableOpacity
          style={styles.button}
          title="Go to Details"
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  containers: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  Images: {
    width: 330,
    height: 370,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#47536A',
    marginTop: 16,
    marginBottom: 16,
  },
  emailInput: {
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
  },
  passwordInput: {
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#03AC0E',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonForget: {
    fontSize: 16,
    color: '#080808',
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 16,
  },
});

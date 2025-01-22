import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const LoginForm = () => {
  const [focusedField, setFocusedField] = useState(null); // Tracks which input is focused
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailInputRef = useRef(null); // Reference for email TextInput
  const passwordInputRef = useRef(null); // Reference for password TextInput

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    Alert.alert('Success', `Logged in with Email: ${email}`);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold mb-6 text-blue-600">Login</Text>
        <View className="w-full">
          {/* Email Input */}
          <Text className="font-medium mb-2 text-gray-700 text-sm dark:text-white">
            Email
          </Text>
          <Pressable
            onPress={() => emailInputRef.current?.focus()} // Focus the email TextInput
            className={`mb-2 flex-row align-middle content-center border-2 rounded-lg bg-white text-gray-800 ${
              focusedField === 'email' ? 'border-blue-600' : 'border-gray-200'
            }`}>
            <FAIcon
              name="user"
              size={20}
              color={focusedField === 'email' ? '#007AFF' : '#A9A9A9'}
              className="ml-4 mr-2 self-center"
            />
            <TextInput
              ref={emailInputRef} // Attach ref to email TextInput
              className="flex-1"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
            />
          </Pressable>

          {/* Password Input */}
          <Text className="font-medium mb-2 text-gray-700 text-sm dark:text-white">
            Password
          </Text>
          <Pressable
            onPress={() => passwordInputRef.current?.focus()} // Focus the password TextInput
            className={`mb-2 flex-row align-middle content-center border-2 rounded-lg bg-white text-gray-800 ${
              focusedField === 'password'
                ? 'border-blue-600'
                : 'border-gray-200'
            }`}>
            <MIcon
              name="password"
              size={20}
              color={focusedField === 'password' ? '#007AFF' : '#A9A9A9'}
              className="ml-4 mr-2 self-center"
            />
            <TextInput
              ref={passwordInputRef} // Attach ref to password TextInput
              className="flex-1"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
            />
          </Pressable>

          {/* Login Button */}
          <Pressable
            className={'items-center overflow-hidden mb-3'}
            onPress={handleLogin}
            android_ripple={{color: '#2563eb'}} // Ripple effect for Android
          >
            {({pressed}) => (
              <Text
                className={`bg-blue-600 py-3 rounded-lg text-white text-lg font-medium w-full text-center ${
                  pressed ? 'bg-blue-700' : ''
                }`}>
                {pressed ? 'Pressed!' : 'Login'}
              </Text>
            )}
          </Pressable>

          {/* Forgot Password */}
          <Pressable onPress={() => Alert.alert('Forgot Password')}>
            <Text className="text-blue-500 text-sm text-center">
              Forgot Password?
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;

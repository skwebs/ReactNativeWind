import React, {useState, useRef} from 'react';
import {TextInput, View, Text} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const IconTextInput = ({
  value,
  onChangeText,
  placeholder,
  iconName,
  secureTextEntry = false,
  onFocus,
  onBlur,
  keyboardType = 'default',
  label,
  containerStyle,
  inputStyle,
  iconStyle,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  return (
    <View style={[{width: '100%'}, containerStyle]}>
      {label && (
        <Text className="font-medium mb-2 text-gray-700 text-sm">{label}</Text>
      )}

      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
          },
          focused ? {borderColor: '#007AFF'} : {borderColor: '#D1D5DB'},
        ]}>
        <FAIcon
          name={iconName}
          size={20}
          color={focused ? '#007AFF' : '#A9A9A9'}
          style={[{marginLeft: 10, marginRight: 8}, iconStyle]}
        />
        <TextInput
          ref={inputRef}
          style={[{flex: 1, paddingVertical: 0}, inputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={() => {
            setFocused(true);
            onFocus && onFocus();
          }}
          onBlur={() => {
            setFocused(false);
            onBlur && onBlur();
          }}
          {...props}
        />
      </View>
    </View>
  );
};

export default IconTextInput;

import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';


interface Props{
    placeholder: string;
    onPress?: () => void;
}
const SearchBar = ({placeholder, onPress}: Props) => {
  return (
    <View className='flex-row items-center bg-secondary/10 rounded-full px-3 py-1 mx-2 my-2'>
      <Image source={icons.search} className="w-5 h-5" resizeMode='contain' tintColor='white'/>
      <TextInput
      onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        placeholderTextColor={"#FFF"}
        className='flex-1 p-2 text-white text-base font-medium'
      />
    </View>
  )
}

export default SearchBar
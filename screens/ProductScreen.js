import { View, Text, TouchableOpacity,StyleSheet,  Image,ScrollView, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';


export default function FavouriteScreen({route}) {
  const item = route.params;
  const [size, setSize] = useState('small');
  const navigation = useNavigation();
 return (
    <ScrollView style={styles.container}>
    <View className="flex-1">
      <StatusBar style="light" />
      <Image 
        source={require('../assets/images/gym.jpg')} 
        style={{height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
        className="w-full absolute" />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity className=" rounded-full " onPress={()=> navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className=" rounded-full border-2 border-white p-2">
            <HeartIcon size="24" color="white" />
          </TouchableOpacity>
        </View>
        <View 
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: {width: 0, height: 30},
            shadowOpacity: 0.9,
          }}
          className="flex-row justify-center">
          <Image source={item.image} className="h-60 w-60" style={styles.image} />
        </View>
        <View 
          style={{backgroundColor: themeColors.bgLight}} 
          className="flex-row justify-center items-center mx-4 rounded-3xl p-1 px-2 space-x-1 opacity-90 w-16">
          <StarIcon size="15" color="white" />
          <Text className="text-base font-semibold text-white">{item.stars}</Text>
        </View>
        <View className="px-4 flex-row justify-between items-center">
            <Text style={{color: themeColors.text}} className="text-3xl font-semibold">
              {item.name}
            </Text>
            <Text style={{color: themeColors.text}} className="text-lg font-semibold">
              Exercise {item.price}
            </Text>
            
        </View>
        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold">Description</Text>
         
        </View>

        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold"></Text>
          <Text className="text-base text-black-600">
            {item.desc}
          </Text>
        </View>
        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold">Instruction</Text>
         
        </View>
        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold"></Text>
          <Text className="text-base text-black-600">
            {item.inst}
          </Text>
        </View>
        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold">WARNING !</Text>
         
        </View>
        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold"></Text>
          <Text className="text-base text-black-600">
            {item.warn}
          </Text>
        </View>

        
      </SafeAreaView>
      <View className={`space-y-3 ${ios? 'mb-6': 'mb-3'}`}>
          <View className="flex-row justify-between items-center px-4 mb-2">
          </View>
          
        </View>
        
      
    </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 400,

    borderRadius: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF9C4', 
  },
}
)

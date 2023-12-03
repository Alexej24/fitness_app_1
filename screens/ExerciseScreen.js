<<<<<<< HEAD
import { View, Text, Image,ImageBackground, StyleSheet, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React from 'react'
import ExerciseCard from '../components/exerciseCard';
import {themeColors} from '../theme';

export default function ExerciseScreen({route}) {
  const exerciseInfo = route.params;
  const ios = Platform.OS == 'ios';
  return (
    
    <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''}`}  >

      <FlatList 
        vertical
        showsVerticalScrollIndicator={false}
        data={exerciseInfo}
        keyExtractor={item => item.id}
        className="overflow-visible"
        renderItem={({ item }) => (
          <ExerciseCard exercise={item} />
        )}
      />
          
    </View>
       )
}

const styles = StyleSheet.create({
  background: {
    
    flex: 1,
    resizeMode: 'contain', // или 'contain' в зависимости от ваших предпочтений
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, )', // Прозрачный черный оверлей для того, чтобы текст был более читаемым
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
=======
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React from 'react'
import ExerciseCard from '../components/exerciseCard';
export default function ExerciseScreen(exercises) {
  const exercisesData = exercises.route.params;
  console.log(exercises.route)
  return (
    <View className="flex-1 relative bg-white">
      <FlatList 
            vertical
            showsVerticalScrollIndicator={false}
            data={exercisesData}
            keyExtractor={item=> item.id}
            className="overflow-visible"
            renderItem={({item})=>{<ExerciseCard exercise={item}/> 
            }}
          />
    </View>
  )
}
>>>>>>> bc3f573123dbc1092940e5caafd3e7c0ab445df2

<<<<<<< HEAD
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Добавлен импорт

function ExerciseCard({ exercise }) {
  const navigation = useNavigation(); // Инициализация объекта navigation

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Product', exercise)} style={styles.container}>
      <Image source={exercise.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{exercise.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 50,
    borderRadius:20,
  },
  textContainer: {
    fontSize: 200,
    flex: 1,
  },
  text: {
    fontSize: 20,
    
  },
});

export default ExerciseCard;
=======
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';

function ExerciseCard(exercise) {
  console.log(exercise)
  return (
    <View className="flex-1 relative bg-white">
      <Text>{exercise.name}</Text>
    </View>
    
  )
}

export default ExerciseCard
>>>>>>> bc3f573123dbc1092940e5caafd3e7c0ab445df2

// app/(tabs)/profile.jsx
import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar'; // স্ট্যাটাস বার কন্ট্রোল করার জন্য

const { width } = Dimensions.get('window');

// ফেক ডাটা
const userData = {
  name: 'Amran Hossain',
  title: 'Full Stack Developer',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-4-1024.png',
  // ... বাকি ডাটা আগের মতোই
};

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* ১. স্ট্যাটাস বার পুরোপুরি হাইড করা */}
      <StatusBar hidden={true} />

      {/* ২. হেডার হাইড করা */}
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* ৩. হিরো সেকশন - যা একদম স্ক্রিনের উপর থেকে শুরু হবে */}
        <View className="bg-blue-600 pb-12 pt-16 items-center rounded-b-[50px] shadow-2xl">
          
          {/* ব্যাকগ্রাউন্ডে হালকা ডিজাইন (ঐচ্ছিক) */}
          <View className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
             <FontAwesome name="code" size={300} color="white" style={{ position: 'absolute', top: -50, right: -50 }} />
          </View>

          <View className="relative">
            <Image 
              source={{ uri: userData.avatar }} 
              className="w-36 h-36 rounded-full border-4 border-white shadow-2xl"
            />
            <View className="absolute bottom-2 right-2 w-7 h-7 bg-green-500 rounded-full border-4 border-white" />
          </View>
          
          <Text className="text-4xl font-extrabold text-white mt-6">{userData.name}</Text>
          <Text className="text-xl text-blue-100 font-medium mt-1">{userData.title}</Text>
          
          <TouchableOpacity className="mt-8 bg-white px-10 py-4 rounded-2xl shadow-xl">
            <Text className="text-blue-600 font-bold text-lg">Contact Me</Text>
          </TouchableOpacity>
        </View>

        {/* ৪. স্ট্যাটস কার্ড */}
        <View className="flex-row justify-evenly px-4 -mt-8">
          {[
            { label: 'Projects', val: '25+' },
            { label: 'Articles', val: '12' },
            { label: 'Reviews', val: '4.9' }
          ].map((item, i) => (
            <View key={i} className="bg-white p-5 rounded-3xl items-center shadow-md w-24 border border-gray-100">
              <Text className="text-2xl font-bold text-gray-800">{item.val}</Text>
              <Text className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{item.label}</Text>
            </View>
          ))}
        </View>

        {/* ৫. অন্যান্য কন্টেন্ট (আগের মতই স্ক্রোলেবল হবে) */}
        <View className="p-6">
           <Text className="text-2xl font-bold text-gray-800 mb-4">About Me</Text>
           <Text className="text-gray-600 leading-7 text-base">
             I am a developer who loves to create full-screen immersive experiences! 
             This layout now covers the entire screen, including the status bar area.
           </Text>
           
           {/* এখানে অনেকগুলো ফেক ডাটা দিন স্ক্রলিং টেস্ট করার জন্য */}
           {[1, 2, 3, 4, 5].map((_, i) => (
             <View key={i} className="bg-white p-6 rounded-3xl mt-4 shadow-sm border border-gray-100">
                <Text className="text-lg font-bold text-gray-700">Experience #{i+1}</Text>
                <Text className="text-gray-500 mt-2 text-sm font-medium">Working as a Senior Developer at TechCorp.</Text>
             </View>
           ))}
        </View>
        
        {/* নিচের স্পেস যাতে ট্যাব বারের জন্য কন্টেন্ট ঢেকে না যায় */}
        <View className="h-20" />
      </ScrollView>
    </View>
  );
}

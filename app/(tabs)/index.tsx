import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    // Tailwind ক্লাসের মাধ্যমে ডিজাইন
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-blue-600">
        Assalamu alaikum Amran
      </Text>
      
      <Text className="text-gray-500 mt-2">
        আপনার প্রথম Expo Router পেজ তৈরি হয়েছে!
      </Text>

      {/* Next.js এর মত নেভিগেশন */}
      <Link href="/two" className="mt-4 p-3 bg-black rounded-lg">
        <Text className="text-white">পরের পেজে যান</Text>
      </Link>
    </View>
  );
}

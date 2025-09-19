import {
  AwesomeButtonProgress
} from 'react-awesome-button';
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "./theme/ThemeContext";

export default function Index() {
  const { themeColors } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: themeColors.background }} className="flex-1">
      <View className="flex-1 ">
        <View className="w-full   h-1/2  ">

          <Image
            source={require("../assets/images/hand.png")}
            style={{ width: "100%", height: "100%", marginLeft: 30, resizeMode: 'contain' }}
          />
        </View>
        <View className=" h-1/2 border-t border-gray-500 px-5 gap-5">
          <Text className="text-yellow-500 text-5xl font-bold text-center mt-10">Welcome 👋</Text>
          <Text className="text-white text-lg text-center mt-2 ">Don't miss a goal! Get live match notifications and match results from your favourite teams and world's most prestigious competitions!</Text>
          <Pressable className="bg-yellow-500 rounded-full py-5 mt-10">
            <Text className="text-white text-lg font-bold text-center">Get Started</Text>
          </Pressable>

          <Pressable className="bg-[#36373F] rounded-full py-5">
            <Text className="text-white text-lg font-bold text-center">I Already Have an Account</Text>
          </Pressable>
          <AwesomeButtonProgress
            type="secondary"
            size="medium"
            action={(element, next) => doSomethingThenCall(next)}
          >
            Primary
          </AwesomeButtonProgress>
        </View>
      </View>
    </SafeAreaView>
  );
}

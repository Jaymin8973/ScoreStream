import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "./theme/ThemeContext";

export default function Index() {
  const { themeColors } = useTheme();
  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }} className="flex-1">
      <View className="flex-1 ">
        <View className="w-full   h-1/2  ">

          <Image
            source={require("../assets/images/Cricket-pana.png")}
            style={{ width: "100%", height: "100%",  resizeMode: 'contain' }}
          />
        </View>
        <View className=" h-1/2  px-5 gap-5 ">
          <Text className=" text-4xl font-bold text-center mt-10">Welcome 👋</Text>
          <Text className=" text-center mt-2 ">Don't miss a goal! Get live match notifications and match results from your favourite teams and world's most prestigious competitions!</Text>
          <Pressable className="bg-black rounded-full py-5 mt-10" onPress={() => router.push("(Authentication)/Signup")}>
            <Text className="text-white text-lg font-bold text-center">Get Started</Text>
          </Pressable>

          <Pressable className="border border-gray-300 rounded-full py-5" onPress={()=>router.push("Login")}>
            <Text className=" text-lg font-bold text-center">I Already Have an Account</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

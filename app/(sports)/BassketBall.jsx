import { FontAwesome } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { Text, View } from 'react-native'

const BassketBall = () => {
  return (
    <View>
        <View className="flex-row mt-5 items-center justify-between border p-5 border-gray-300 pb-3 ">

                <View className="gap-4">
                  <View className="flex-row gap-3 items-center ">
                    <Text className="text-xl mx-2">15:00</Text>
                    <View className="gap-3">
                      <View className="flex-row items-center">
                        <Image source={require("../../assets/images/SA.png")} style={{ height: 30, width: 30 }} />
                        <Text className="text-xl ms-3">Leviki Patrioti</Text>
                      </View>
                      <View className="flex-row items-center">
                        <Image source={require("../../assets/images/Mexico.png")} style={{ height: 30, width: 30 }} />
                        <Text className="text-xl ms-3">Baken Bears</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="gap-2">

                  <View className="gap-5 flex-row items-center ">
                    <View className="gap-3">
                      <View className=" items-center">
                        <Text className="text-xl">82</Text>
                      </View>
                      <View className=" items-center">
                        <Text className="text-xl">67</Text>
                      </View>
                    </View>
                    <View>
                      <FontAwesome name='star' size={24} color={'black'} />
                    </View>
                  </View>
                </View>
              </View>
    </View>
  )
}

export default BassketBall
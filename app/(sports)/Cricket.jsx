import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
const Cricket = () => {
  return (
    <View>
       <View className="border border-gray-200 bg-gray-50 rounded-md mt-5 px-5 py-5" >

            <View className="border-b border-gray-300 pb-3 ">
              <View className="flex-row justify-between items-center ">
                <Text className="text-xl">India Under 19  2025</Text>
                <View className="bg-red-500 p-3 flex-row gap-2 items-center rounded-lg">
                  <View className="bg-white h-2 w-2 rounded-full "></View>
                  <Text className="text-white">Live</Text>
                </View>
              </View>
              <View>
                <Text>Today 9:30 AM</Text>
              </View>
            </View>
            <View >
              <View className="flex-row mt-5 items-center justify-between border-b border-gray-300 pb-3">

                <View className="gap-2">
                  <View className="flex-row gap-3 items-center">
                    <Image source={require('../../assets/images/australian-flag.webp')} style={{ height: 40, width: 40, borderRadius: 50 }} />
                    <View>
                      <Text>141-6</Text>
                      <Text>39.0 Over</Text>
                    </View>
                  </View>
                  <Text>Aus 19🏏</Text>
                </View>

                <View>
                  <Text className="text-4xl">⚡</Text>
                </View>

                <View className="gap-2">
                  <View className="flex-row gap-3 items-center">
                    <View>
                      <Text>Yet to bat</Text>
                    </View>
                    <Image source={require('../../assets/images/indian-flag.webp')} style={{ height: 40, width: 40, borderRadius: 50 }} />
                  </View>
                  <Text className=" text-right">Ind 19</Text>
                </View>
              </View>


              <View className=" mt-5">
                <Text className="text-lg text-yellow-600">Australia U19 opt to bat 🏏</Text>
              </View>
            </View>
          </View>



          <View className="border border-gray-200 bg-gray-50 rounded-md mt-5 px-5 py-5" >

            <View className="border-b border-gray-300 pb-3 ">
              <View className="flex-row justify-between items-center ">
                <Text className="text-xl">World Cup 2022  <AntDesign name="star" size={24} color="#FC9D17" /></Text>
              </View>
              <View>
                <Text className="text-gray-500">Group C</Text>
              </View>
            </View>
            <View >
              <View className="flex-row mt-5 items-center justify-between border-b border-gray-300 pb-3 ">

                <View className="gap-4">
                  <View className="flex-row gap-3 items-center ">
                    <Text className="text-xl mx-5">FT</Text>
                    <View className="gap-3">
                      <View className="flex-row items-center">
                        <Image source={require("../../assets/images/pzpn.png")} style={{ height: 30, width: 30 }} />
                        <Text className="text-xl ms-3"> Poland</Text>
                      </View>
                      <View className="flex-row items-center">
                        <Image source={require("../../assets/images/Ata.png")} style={{ height: 30, width: 30 }} />
                        <Text className="text-xl ms-3"> Argentina</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="gap-2">

                  <View className="gap-5 flex-row items-center ">
                    <View className="gap-3">
                      <View className=" items-center">
                        <Text className="text-xl"> 0</Text>
                      </View>
                      <View className=" items-center">
                        <Text className="text-xl"> 2</Text>
                      </View>
                    </View>
                    <View>
                      <FontAwesome name='star' size={24} color={'black'} />
                    </View>
                  </View>
                </View>
              </View>


              <View className="flex-row mt-5 items-center justify-between border-b border-gray-300 pb-3 ">

                <View className="gap-4">
                  <View className="flex-row gap-3 items-center ">
                    <Text className="text-xl mx-2">15:00</Text>
                    <View className="gap-3">
                      <View className="flex-row items-center">
                        <Image source={require("../../assets/images/SA.png")} style={{ height: 30, width: 30 }} />
                        <Text className="text-xl ms-3">Saudi Arabia</Text>
                      </View>
                      <View className="flex-row items-center">
                        <Image source={require("../../assets/images/Mexico.png")} style={{ height: 30, width: 30 }} />
                        <Text className="text-xl ms-3">Mexico</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="gap-2">

                  <View className="gap-5 flex-row items-center ">
                    <View className="gap-3">
                      <View className=" items-center">
                        <Text className="text-xl"> 0</Text>
                      </View>
                      <View className=" items-center">
                        <Text className="text-xl"> 2</Text>
                      </View>
                    </View>
                    <View>
                      <FontAwesome name='star' size={24} color={'black'} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

    </View>
  )
}

export default Cricket
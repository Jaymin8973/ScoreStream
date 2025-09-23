import { AntDesign, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Home = () => {

  const [show, setShow] = useState(false);
  const [date, setDate] = useState('28');
  const [selected, setSelected] = useState("");
  const [match, setMatch] = useState('ENG')

  const Categories = [
    { name: 'WC 2022' },
    { name: 'ENG' },
    { name: 'FRA' },
    { name: 'IND' },
    { name: 'NZ' },
    { name: 'AFG' },

  ];

  const Dates = [
    { date: '28', day: 'Mon' },
    { date: '29', day: 'Tue' },
    { date: '30', day: 'Wed' },
  ]

  const dateSelect = (date) => {
    setDate(date);
  }

   const matchSelect = (name) => {
    setMatch(name);
  }

  return (
    <ScrollView className="flex-1">
      <View className="bg-white flex-1 gap-5">
        <View className=" mt-5 ">
          <FlatList
            data={Categories}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => {
              const isSelected = match === item.name;
              return(
              <TouchableOpacity onPress={() => matchSelect(item.name)}>
                <View className={`${isSelected ? "bg-black " : ""}ms-5 p-2 px-5 rounded-full border`}>
                  <Text className={isSelected ? "text-white" : ""}>{item.name}</Text>
                </View>
              </TouchableOpacity>
              )
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View className="mx-2 overflow-auto">
          <View className="items-center flex-row">
            <View className="border rounded-full p-2 px-5"><Text>Live</Text></View>
            <FlatList
              data={Dates}
              keyExtractor={(item) => item.date}
              renderItem={({ item }) => {
                const isSelected = date === item.date;

                return (
                  <TouchableOpacity onPress={() => dateSelect(item.date)}>
                    <View
                      className={`${isSelected ? " bg-black rounded-full" : ""} ms-5 p-2 px-5 justify-center items-center `}
                    >
                      <Text className={`${isSelected ? "text-white" : ""}`}>{item.day}</Text>
                      <Text className={`${isSelected ? "text-white" : ""}`}>{item.date}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

            <View className=" p-2 px-5 ">
              <TouchableOpacity
                onPress={() => setShow(!show)}
                className="p-2"
              >
                <EvilIcons name="calendar" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
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


          {show && (
            <View
              className="absolute w-full bg-white shadow-lg"
              style={{
                top: 0,
                left: 0,
                zIndex: 9999,
                elevation: 20, // Android shadow
                shadowColor: "#000", // iOS shadow
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
              }}
            >
              <Calendar
                onDayPress={(day) => {
                  setSelected(day.dateString);
                  setShow(false);
                }}
                markedDates={{
                  [selected]: { selected: true, selectedColor: "black" },
                }}
                style={{ width: '100%' }}
              />
            </View>
          )}
        </View>
      </View >
    </ScrollView>
  )
}

export default Home
import { EvilIcons, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';
import BassketBall from '../(sports)/BassketBall';
import Cricket from '../(sports)/Cricket';
import Football from '../(sports)/Football';
import Tennis from '../(sports)/Tennis';

const Home = () => {

  const [show, setShow] = useState(false);
  const [date, setDate] = useState('28');
  const [selected, setSelected] = useState("");
  const [match, setMatch] = useState('ENG')
  const [page, setPage] = useState('Football');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Cricket", value: "Cricket" , icon:()=> <Ionicons name="tennisball" size={24} color="black" /> },
    { label: "Football", value: "Football", icon:()=><Ionicons name="football-sharp" size={24} color="black" />},
    { label: "Tennis", value: "Tennis", icon:()=><MaterialCommunityIcons name="tennis-ball" size={24} color="black" />},
    { label: "BasketBall", value: "BasketBall", icon:()=><FontAwesome5 name="basketball-ball" size={24} color="black" />},

  ]);


  const renderPage = () => {
    switch (page) {
      case "Cricket":
        return <Cricket />;
      case "Football":
        return <Football />;
      case "Tennis":
        return <Tennis />;
        case "BasketBall":
        return <BassketBall />;
      default:
        return <Text >📄 Please select a page</Text>;
    }
  };

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

    <View className="bg-white flex-1 gap-5">
      <View style={{ marginHorizontal: 20, borderRadius: 8 }} className="mt-5">
        <DropDownPicker
          open={open}
          value={page}
          items={items}
          setOpen={setOpen}
          setValue={setPage}
          setItems={setItems}
          placeholder="Select Page"
        />
      </View>

      <ScrollView className="flex-1">
        <View>
          <View className="">
            <FlatList
              data={Categories}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => {
                const isSelected = match === item.name;
                return (
                  <TouchableOpacity onPress={() => matchSelect(item.name)}>
                    <View className={`${isSelected ? "bg-black " : ""}ms-2 p-2 px-5 rounded-full border`}>
                      <Text className={isSelected ? "text-white" : ""}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View className="mx-2 mt-2 overflow-auto">
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
            {renderPage()}

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
        </View>
      </ScrollView>

    </View >
  )
}

export default Home
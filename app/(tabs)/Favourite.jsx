import { AntDesign } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { FlatList, Text, View } from 'react-native'

const Favourite = () => {

  const FavList = [
    {
      image: require('../../assets/images/FIFA.png'),
      title: "World Cup 2022",
      country : "FIFA",
    },
     {
      image: require('../../assets/images/England.png'),
      title: "Premier League",
      country : "England",
    },
     {
      image: require('../../assets/images/UEFA.png'),
      title: "Champions League",
      country : "UEFA",
    },
     {
      image: require('../../assets/images/Europe.png'),
      title: "Europe League",
      country : "UEFA",
    },
     {
      image: require('../../assets/images/Netherlands.png'),
      title: "Eredivisie",
      country : "Netherlands",
    }
  ]

  return (
     <View>
       <FlatList
  data={FavList}
  keyExtractor={(item) => item.title}
  renderItem={({ item }) => (
    <View className="my-2 p-5 py-8 border border-gray-300 rounded-lg flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <Image
          source={item.image}
          style={{ height: 40, width: 40 }}
          contentFit="contain" // expo-image me resizeMode nahi, contentFit use karo
        />
        <View>
          <Text className="text-xl font-semibold">{item.title}</Text>
          <Text className="text-gray-500">{item.country}</Text>
        </View>
      </View>
      <View>
        <AntDesign name="star" size={24} color="#FC9D17" />
      </View>
    </View>
  )}
/>
     </View>
  )
}

export default Favourite
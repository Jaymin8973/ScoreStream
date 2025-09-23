import { Feather, FontAwesome, FontAwesome6, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';

const _layout = () => {
  return (
   <Tabs>
    <Tabs.Screen name='Home'  options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Octicons name="home" size={24} color={color} />,
          tabBarActiveTintColor: 'black',
          headerLeft: () =><Pressable className="ms-5 me-5" ><MaterialIcons name="notes" size={24} color="black" /></Pressable>,
          headerTitleAlign:'left',
          headerRight:()=><View className="me-5"><FontAwesome6 name="magnifying-glass" size={24} color="black" /></View>,
          headerTitle:"ScoreStream"
        }} />

           <Tabs.Screen name='Favourite'  options={{
          title: 'Favourite',
          tabBarIcon: ({ color }) => <Feather name="star" size={24} color={color} />,
          tabBarActiveTintColor: 'black',
           headerLeft: () =><View className="ms-5 me-5"><MaterialIcons name="notes" size={24} color="black" /></View>,
          headerTitleAlign:'left',
          headerRight:()=><View className="me-5"><FontAwesome6 name="magnifying-glass" size={24} color="black" /></View>,
          headerTitle:"Favourites"
        }} />
           <Tabs.Screen name='News'  options={{
          title: 'News',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="newspaper-o" color={color} />,
          tabBarActiveTintColor: 'black',
           headerLeft: () =><View className="ms-5 me-5"><MaterialIcons name="notes" size={24} color="black" /></View>,
          headerTitleAlign:'left',
          headerRight:()=><View className="me-5"><FontAwesome6 name="magnifying-glass" size={24} color="black" /></View>,
          headerTitle:"ScoreStream"
        }} />
           <Tabs.Screen name='Watch'  options={{
          title: 'Watch',
          tabBarIcon: ({ color }) => <Feather name="video" size={24} color={color} />,
          tabBarActiveTintColor: 'black',
           headerLeft: () =><View className="ms-5 me-5"><MaterialIcons name="notes" size={24} color="black" /></View>,
          headerTitleAlign:'left',
          headerRight:()=><View className="me-5"><FontAwesome6 name="magnifying-glass" size={24} color="black" /></View>,
          headerTitle:"ScoreStream"
        }} />
           <Tabs.Screen name='Account'  options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
          tabBarActiveTintColor: 'black',
           headerLeft: () =><View className="ms-5 me-5"><MaterialIcons name="notes" size={24} color="black" /></View>,
          headerTitleAlign:'left',
          headerRight:()=><View className="me-5"><FontAwesome6 name="magnifying-glass" size={24} color="black" /></View>,
          headerTitle:"Account"
        }} />
   </Tabs>
  )
}

export default _layout
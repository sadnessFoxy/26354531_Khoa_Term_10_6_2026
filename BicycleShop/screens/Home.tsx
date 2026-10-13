import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native'
import CardBike, { bikeType } from '../components/CardBike'
function Home({ navigation, route }: any) {
  const [bike, setBike] = useState<bikeType[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://699fb84a3188b0b1d5369e2a.mockapi.io/bicycle")
        const data = await res.json()
        setBike(data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [])
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "red", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>The world's best bike</Text>
      <FlatList data={bike} renderItem={({ item }) => (<CardBike data={item} navigation={navigation} />)} keyExtractor={(item) => item.id.toString()} numColumns={2} columnWrapperStyle={{ gap: 10, marginBottom: 10 }}></FlatList>
    </View>
  )
}

export default Home
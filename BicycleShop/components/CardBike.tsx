import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
export type bikeType = {
  id: string,
  name: string,
  price: number,
  img: string
}
export type bikeCardProp = {
  data: bikeType,
  navigation: any
}
function CardBike({ data, navigation }: bikeCardProp) {

  return (
    <TouchableOpacity onPress={() => { navigation.navigate("Detail", { data }) }}>
      <View style={{ alignItems: "center", width: 167, height: 200, backgroundColor: "#e79393", padding: 10, borderRadius: 15 }}>
        <Image style={{ width: 130, height: 130 }} source={{ uri: data.img }}></Image>
        <Text style={{fontWeight:"bold",fontSize:20}}>{data.name}</Text>
        <Text style={{fontWeight:"bold",fontSize:20}}>${data.price}</Text>
      </View>
    </TouchableOpacity>
  )

}

export default CardBike
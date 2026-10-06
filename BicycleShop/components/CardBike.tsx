import React from 'react'
import { View,Image, Text } from 'react-native'
export type bikeType ={
  id:string,
  name:string,
  price:number,
  img:string
}
export type bikeCardProp={
    data:bikeType,
}
function CardBike({data}:bikeCardProp) {

  return (
    <View style={{alignItems:"center",width:167,height:200,backgroundColor:"#e79393",padding:10}}>
        <Image source={require(data.img)}></Image>
        <Text>{data.name}</Text>
        <Text>${data.price}</Text>
    </View>
  )
}

export default CardBike
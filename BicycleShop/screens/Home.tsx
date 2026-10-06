import React, { useEffect, useState } from 'react'
import { FlatList, View,Text } from 'react-native'
import CardBike, { bikeType } from '../components/CardBike'
function Home({navigation,route}:any) {
  const [bike,setBike] = useState<bikeType[]>([])
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await fetch("https://699fb84a3188b0b1d5369e2a.mockapi.io/bicycle")
        const data = res.json()
        setBike(bike)
      }catch(error){
        console.error();
      }
      fetchData()
    }
  },[])
  return (
    <View style={{alignItems:"center"}}>
      <Text style={{color:"red",fontSize:20,fontWeight:"bold"}}>The world's best bike</Text>
      <FlatList data={bike} renderItem={({item})=>(<CardBike data={item}/>)} keyExtractor={(item)=>item.id.toString()}></FlatList>
    </View>
  )
}

export default Home
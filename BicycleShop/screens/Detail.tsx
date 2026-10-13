import React, { use, useState } from 'react'
import {View,Image, Text, TouchableOpacity} from "react-native"

function Detail({ navigation, route }: any) {
  const [data, setData] = useState(route.params?.data)
  return (
    <View style={{padding:10}}>
      <View style={{width:"100%", height:300, alignItems:"center"}}>
        <Image style={{width:"90%", height:"100%",resizeMode:"cover"}} source={{uri:data.img}}></Image>
      </View>
      <Text style={{fontWeight:"bold",fontSize:30}}>{data.name}</Text>
      <Text style={{fontWeight:"bold",fontSize:25,color:"grey"}}>price: ${data.price}</Text>
      <View style={{position:"absolute", bottom:-200, right:0}}>
        <TouchableOpacity style={{width:190,backgroundColor:"red", alignItems:"center", borderRadius:10,padding:10}}>
          <Text style={{fontWeight:"bold",color:"white",fontSize:30}}>Add to cart</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  )
}

export default Detail
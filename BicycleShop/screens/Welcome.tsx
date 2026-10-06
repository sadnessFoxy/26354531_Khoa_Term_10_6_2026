import React from 'react'
import { View,Text, Image, Pressable, SafeAreaViewBase, SafeAreaView } from 'react-native'

function Welcome({navigation}:any) {
  return (
    <View style={{alignItems:"center",width:"100%"}}>
        <Text style={{fontWeight:'bold',padding:10,alignItems:"center",fontSize:25}}>A premium online store for sporter and their stylish choice</Text>
        <View style={{width:359, justifyContent:"center",alignItems:"center",height:388,backgroundColor:"#e79393",borderRadius:10,marginBottom:10}}>
            <Image style={{width:"100%",height:"100%",resizeMode:"cover"}} source={require("../assets/blue_bike.png")}/>
        </View>
        <View>
            <Text style={{fontWeight:"bold",textTransform:"uppercase",fontSize:25,marginBottom:10}}>Power Bike Shop</Text>
        </View>
        <Pressable style={{borderRadius:10, backgroundColor:"red", width:"80%",alignItems:"center"}} onPress={()=>{navigation.navigate("Home")}} >
            <Text style={{color:"white", padding:10,fontSize:30,fontWeight:"bold"}}>Get Started</Text>
        </Pressable>
    </View>
  )
}

export default Welcome;
import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

export default function HeaderTabs() {
const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton 
        text = "Delivery" 
        btnColor = "black" 
        textColor = "white" 
        activeTab = {activeTab}
        setActiveTab = {setActiveTab}
      />
      <HeaderButton 
        text = "Pickup"   
        btnColor = "white" 
        textColor = "black"
        activeTab = {activeTab}
        setActiveTab = {setActiveTab}
      />
    </View>
  )
}

const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTab == props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress = {() => props.setActiveTab(props.text)}    
    >
        <Text 
            style={{ 
                color: props.activeTab == props.text ? "black" : "white", 
                fontSize: 15, 
                fontWeight: "900", 
            }}
        >
            {props.text}
        </Text>;
    </TouchableOpacity>
)

import React from "react";
import { View , Text ,  StyleSheet, ImageBackground, Image } from "react-native";

const Background = ({children}) => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('./bg.png')} style={styles.image} resizeMode='stretch' >
                {/* <Text>asdsa</Text> */}
                {/* <Image source={require('./bg.png')} style={{width:300 , height:200}} /> */}

                {children}
                </ImageBackground>
        </View>
    )
};

export default Background;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    image: {
        flex: 1,
    width: null,
    height: null,

    }
})
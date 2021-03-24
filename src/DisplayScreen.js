import * as React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

export default function DisplatScreen({ route, navigation }) {

    const { imagepath } = route.params;
    const { Name } = route.params;
    const { phone } = route.params;
  
    return (
      <View style={styles.MainContainer}>
  
  <Image
                  source={{
                    uri: imagepath,
                  }}
                  style={{height: 100, width: 100 ,backgroundColor:'#ff0',marginTop:100,
                  borderRadius:70,}}/>
  
        <Text style={styles.text}>{Name} </Text>
  
        <Text style={styles.text}>{phone} </Text>
  
  
      </View>
    );
  }
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      alignItems: 'center'
    },
  
    text: {
      textAlign: 'center',
      margin: 12,
      fontSize: 22,
      fontWeight: "100",
    },
  
  });
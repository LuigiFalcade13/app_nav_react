import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
 
 
function DetailsScreen(navigation) {
    return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Details Screen123</Text>
<Button
          title="voltar"
          onPress={() => navigation.navigation.goBack()}
        />
</View>
    );
  }
 
export default DetailsScreen;
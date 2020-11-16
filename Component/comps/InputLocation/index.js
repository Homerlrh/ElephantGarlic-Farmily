import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";




const InputLocation = ({loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, dropdown}) => {

  
  const [isdrop, setDrop] = useState(false);

  const locCont = {display: isdrop ? "flex" : "none"}

  useEffect(()=>{
    setDrop(dropdown);
  }, [dropdown]);


  return (
    <View style={styles.container}>

      <View style={styles.locationContainer}>
        <View style={styles.label}>
          <Image
            source={require('../../public/location.png')}
            style={styles.locIcon}
          />
          <Text style={styles.text}>Location</Text>
        </View>
        <TouchableOpacity style={styles.locCont} 
          onPress={()=>{
            setDrop(!isdrop);
          }}>
          <Image
            source={require('../../public/ArrowDown.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>

      <View isdrop={isdrop} style={[styles.locContainer, locCont]}>
        <View style={styles.locBlock}>
          <Text style={styles.loc}>{loc1}</Text>
        </View>
        <View style={styles.locBlock}>
          <Text style={styles.loc}>{loc2}</Text>
        </View>
        <View style={styles.locBlock}>
          <Text style={styles.loc}>{loc3}</Text>
        </View>
        <View style={styles.locBlock}>
          <Text style={styles.loc}>{loc4}</Text>
        </View>
        <View style={styles.locBlock}>
          <Text style={styles.loc}>{loc5}</Text>
        </View>
        <View style={styles.locBlock}>
          <Text style={styles.loc}>{loc6}</Text>
        </View>
        <View style={styles.locBlock}>
          <Text style={styles.loc}>{loc7}</Text>
        </View>
        <View style={styles.locBlock}>
          <Text style={styles.loc}>{loc8}</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: 15,
    alignSelf: "stretch"
  },

  locationContainer: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#DADADA",
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    marginBottom: 10
  },

  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  text: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Roboto",
    padding: 5
  },

  locIcon: {
    width: 20,
    height: 20,
    margin: 5
  },

  arrow: {
    width: 30,
    height: 30
  },
locContainer:{
   backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    elevation: 3
},
  loc: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Roboto",
    margin: 12
  },

  locBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1.5,
    alignSelf: "stretch"
  }
});

InputLocation.defaultProps = {
  loc1:null,
  loc2:null,
  loc3:null,
  loc4:null,
  loc5:null,
  loc6:null,
  loc7:null,
  loc8:null,
  dropdown:()=>{}
}


export default InputLocation;
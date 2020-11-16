import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {Calendar} from 'react-native-calendars';

const InputDate = ({dropdown}) => {

  const [iddrop, setDDrop] = useState(false);

  const dateCont = {display: iddrop ? "flex" : "none"}

  useEffect(()=>{
    setDDrop(dropdown);
  }, [dropdown]);

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <View style={styles.label}>
          <Image
            source={require('../../public/DateIcon.png')}
            style={styles.dateIcon}
          />
          <Text style={styles.text}>Date</Text>
        </View>
        <TouchableOpacity style={styles.dateCont}
        onPress={()=>{
            setDDrop(!iddrop);
          }}>
          <Image
            source={require('../../public/ArrowDown.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>

      <View iddrop={iddrop} style={[styles.calendar, dateCont]}>
        <Calendar
          // Initially visible month. Default = Date()
          current={'2020-11-08'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2020-01-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2099-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => (<Arrow/>)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={0}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={true}
          // Disable right arrow. Default = false
          disableArrowRight={true}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Replace default month and year title with custom one. the function receive a date as parameter.
          renderHeader={(date) => {/*Return JSX*/}}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          />
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

  dateContainer: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#D3D3D3",
    borderRadius: 8,
    padding: 5,
    borderColor: "#DADADA",
    borderWidth: 2,
    marginTop: 10
  },

  text: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Roboto",
    padding: 5
  },

  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  dateIcon: {
    width: 20,
    height: 20,
    margin: 5
  },

  arrow: {
    width: 30,
    height: 30
  },

  calendar: {
    borderRadius: 10,
    // display: "flex",
    // flexDirection: "row",
    // justifyContent:"space-between",
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    elevation: 3,
    marginTop: 10
  }
});

InputDate.defaultProps = {
  dropdown:()=>{}
}

export default InputDate;

import { View,StyleSheet } from "react-native";
 export default TabIconWithLine = ({ focused, children }) => {
    return (
      <View style={styles.iconContainer}>
        {children}
        {focused && <View style={styles.indicator} />}
      </View>
    );
  };



  const styles = StyleSheet.create({
    iconContainer: {
      alignItems: 'center',
    },
    indicator: {
      width: '100%',
      height: 2,
      backgroundColor: '#fca510',
      marginTop: 4,
    },
  });

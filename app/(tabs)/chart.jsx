// FitnessChart.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Animated,{FadeInDown, FadeInOut} from 'react-native-reanimated';
const FitnessChart = () => {
  const [data, setData] = useState([
    { name: 'Cardio', population: 30, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Strength', population: 20, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Flexibility', population: 20, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Balance', population: 10, color: 'rgb(0, 255, 0)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Other', population: 20, color: '#FFFF00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ]);

  const [cardio, setCardio] = useState('');
  const [strength, setStrength] = useState('');
  const [flexibility, setFlexibility] = useState('');
  const [balance, setBalance] = useState('');
  const [other, setOther] = useState('');

  const updateChart = () => {
    const updatedData = data.map((entry) => {
      switch (entry.name) {
        case 'Cardio':
          return { ...entry, population: parseInt(cardio) || entry.population };
        case 'Strength':
          return { ...entry, population: parseInt(strength) || entry.population };
        case 'Flexibility':
          return { ...entry, population: parseInt(flexibility) || entry.population };
        case 'Balance':
          return { ...entry, population: parseInt(balance) || entry.population };
        case 'Other':
          return { ...entry, population: parseInt(other) || entry.population };
        default:
          return entry;
      }
    });
    setData(updatedData);
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView   >
      <Animated.View entering={FadeInDown}>
      <Text style={styles.title}>Fitness Activity Breakdown</Text>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 50}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cardio"
          keyboardType="numeric"
          value={cardio}
          onChangeText={setCardio}
        />
        <TextInput
          style={styles.input}
          placeholder="Strength"
          keyboardType="numeric"
          value={strength}
          onChangeText={setStrength}
        />
        <TextInput
          style={styles.input}
          placeholder="Flexibility"
          keyboardType="numeric"
          value={flexibility}
          onChangeText={setFlexibility}
        />
        <TextInput
          style={styles.input}
          placeholder="Balance"
          keyboardType="numeric"
          value={balance}
          onChangeText={setBalance}
        />
        <TextInput
          style={styles.input}
          placeholder="Other"
          keyboardType="numeric"
          value={other}
          onChangeText={setOther}
        />
      </View>
      <Button title="Update Chart" onPress={updateChart} />
      </Animated.View>
    </ScrollView>
    </SafeAreaView>
  );
};

const chartConfig = {
  backgroundGradientFrom: 'red',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'yellow',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false, 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
  },
});

export default FitnessChart;

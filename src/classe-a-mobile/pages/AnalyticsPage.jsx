import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Title, Text, Divider } from 'react-native-paper';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from 'react-native-chart-kit';
import { useTheme } from '../providers/ThemeProvider';

const AnalyticsPage = () => {
  const { paperTheme } = useTheme();

  const screenWidth = Dimensions.get('window').width - 10;
  const chartConfig = {
    ...paperTheme.chartsTheme,
    decimalPlaces: 2, // optional, defaults to 2dp
    style: {
      borderRadius: 5,
      margin: 5,
      paddingTop: 10,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#42a5f5',
    },
    color: (opacity = 1) => `rgba(66, 165, 245, ${opacity})`,
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.chartTitle}>Contas Alcançadas</Title>
      <LineChart
        data={{
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
          datasets: [
            {
              data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
            },
          ],
        }}
        width={screenWidth} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text style={styles.chartDescription}>Esse é o número de contas alcançadas</Text>
      <Divider />
      <Title style={styles.chartTitle}>Impressões do último mês</Title>
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        data={{
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
          datasets: [
            {
              data: [15, 16, 9, 12, 14, 10],
            },
          ],
        }}
        yAxisLabel="K"
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
      <Text style={styles.chartDescription}>As impressões são um compilado de quantas vezes as postagens foram vistas</Text>
      <Divider />
      <Title style={styles.chartTitle}>Gênero Contas Alcançadas</Title>
      <ProgressChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        data={{
          labels: ['Mulheres', 'Homens'], // optional
          data: [0.39, 0.64],
        }}
        yAxisLabel="K"
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
      <Divider />
      <Title style={styles.chartTitle}>Faixa Etária Contas Alcançadas</Title>
      <PieChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        data={[
          {
            name: "18-24",
            population: 18,
            color: "#2196F3",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "25-34",
            population: 40,
            color: "#FF9800",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "35-44",
            population: 27.3,
            color: "#4CAF50",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "45-54",
            population: 14.6,
            color: "#9C27B0",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
        ]}
        width={screenWidth}
        height={300}
        chartConfig={chartConfig}
        backgroundColor='transparent'
        accessor="population"
        paddingLeft={20}
        center={[0, 0]}
      />
      <Divider />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  chartTitle: {
    textAlign: 'center',
    margin: 5,
  },
  chartDescription: {
    textAlign: 'center',
    margin: 2,
  },
});

export default AnalyticsPage;

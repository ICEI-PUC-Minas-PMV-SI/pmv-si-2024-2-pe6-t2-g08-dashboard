import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Title, Text, Divider, Card, Avatar } from 'react-native-paper';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { useTheme } from '../providers/ThemeProvider';

const HomePage = () => {
  const { paperTheme } = useTheme();

  const screenWidth = Dimensions.get('window').width - 10;
  const chartConfig = {
    ...paperTheme.chartsTheme,
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
      <Title style={styles.chartTitle}>Seguidores Ganhos</Title>
      <BarChart
        data={{
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
          datasets: [
            {
              data: [160, 190, 85, 95, 110, 150],
            },
          ],
        }}
        width={screenWidth} // from react-native
        height={220}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        absolute
      />
      <Divider />
      <Title style={styles.chartTitle}>Data de Pagamento</Title>
      <Text style={styles.chartDescription}>Sua data de pagamento está configurada para todo dia 20</Text>
      <Divider />
      <Card.Title
        title="CPM"
        subtitle="R$ 10.33"
        left={(props) => <Avatar.Icon {...props} icon="chart-areaspline" />}
      />
       <Card.Title
        title="Custo por Mensagem"
        subtitle="R$ 4.05"
        left={(props) => <Avatar.Icon {...props} icon="calculator-variant" />}
      />
       <Card.Title
        title="Valor Gasto"
        subtitle="R$ 540.22"
        left={(props) => <Avatar.Icon {...props} icon="currency-brl" />}
      />
      <Divider />
      <Title style={styles.chartTitle}>Leads Gerados</Title>
      <LineChart
        data={{
          labels: ['Dia 01-05', 'Dia 06-10', 'Dia 11-15', 'Dia 16-20', 'Dia 20-25', 'Dia 26-30'],
          datasets: [
            {
              data: [4000, 3000, 6000, 4500, 3500, 7000],
            },
          ],
        }}
        width={screenWidth} // from react-native
        height={220}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        absolute
      />
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

export default HomePage;

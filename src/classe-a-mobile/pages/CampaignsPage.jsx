import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getAllCampaigns } from '../utils/services';
import { useAuth } from '../providers/AuthProvider';

const CampaignsPage = () => {
  const [campaigns, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { clientId } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCampaigns(clientId);
        setData(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }

      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  // Render each card for the campaigns
  const renderItem = ({ item }) => {
    return (
      <Card style={styles.card} key={item.id}>
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.description || 'No description available'}</Paragraph>
          <Paragraph>Budget: {item.budget}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={() => {
              navigation.navigate('Creatives', {
                campaignId: item.id,
              });
            }}
            mode="contained"
          >
            Detalhes
          </Button>
        </Card.Actions>
      </Card>
    );
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }
  return (
    <View style={styles.FlatListContainer}>
      <Title style={styles.TitlePage}>Campanhas</Title>
      <FlatList data={campaigns} keyExtractor={(item) => item.id} renderItem={renderItem} contentContainerStyle={styles.listContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlatListContainer: {
    flex: 1,
  },
  TitlePage: {
    textAlign: 'center',
    margin: 20,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default CampaignsPage;

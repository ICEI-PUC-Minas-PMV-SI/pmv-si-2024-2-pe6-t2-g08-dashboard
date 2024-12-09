import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getAllCreatives } from '../utils/services';

const CreativesPage = ({ route }) => {
  const [creatives, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { campaignId } = route.params;
        const data = await getAllCreatives(campaignId);
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

  // Render each card for the creatives
  const renderItem = ({ item }) => {
    return (
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.mediaUrl }} />
        <Card.Content>
          <Paragraph style={styles.paragraph}>{item.content.substring(0,50)+'...' || 'No description available'}</Paragraph>
          <Paragraph>Media: {item.mediaType}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={() => {
              navigation.navigate('CreativeChat', {
                creativeData: item,
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
      <Title style={styles.TitlePage}>Criativos</Title>
      <FlatList data={creatives} keyExtractor={(item) => item.id} renderItem={renderItem} contentContainerStyle={styles.listContainer} />
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
  paragraph: {
    textAlign: 'center',
    margin: 10,
  },
});

export default CreativesPage;

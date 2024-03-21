import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';
import { View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { fetchTopRatedMovies } from '@/api/movies';
import { useQuery } from "@tanstack/react-query";
import MovieListItem from '@/components/MovieListItem';

export default function TabOneScreen() {

  const { data: movies, isLoading, error } = useQuery({ queryKey: ['movies'], queryFn: fetchTopRatedMovies });

  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     setIsLoading(true);
  //     const movies = await fetchTopRatedMovies();
  //     setMovies(movies);
  //     setIsLoading(false);
  //   }
  //   fetchMovies();
  // }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 5, padding: 5 }}
        columnWrapperStyle={{ gap: 10 }}
        data={movies}
        numColumns={2}
        renderItem={({ item }) => <MovieListItem movie={item} />}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

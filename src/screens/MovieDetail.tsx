import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// export default function MovieDetail(): JSX.Element {
//   const navigation = useNavigation<any>();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Movie Detail Page</Text>
//       <Button title="Kembali" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
// });

const MovieDetail = ({ navigation }: any): any => {
  const fetchData = (): void => {
    // Gantilah dengan akses token Anda
    const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg2MDQ1NjhjNmVjYmRhODc0ODkzMzdkMDU5NzhmYSIsIm5iZiI6MTcxOTM0MzcxOS41MTYxNTcsInN1YiI6IjY2N2IxNGEwYTA5NTZmMGM2N2Y2OGY0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EEhvwOPk3B3f7AW0obsjcUh54cDFKWjvbOCXIUEIcAs'

    const url =
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }

    fetch(url, options)
      .then(async (response) => await response.json())
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movie Detail Page</Text>
      <Button
        title="Fetch Data"
        onPress={() => {
          fetchData()
        }}
      />
    </View>
  )
}

export default MovieDetail
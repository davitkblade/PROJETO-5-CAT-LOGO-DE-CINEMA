import { ScrollView, StyleSheet } from 'react-native';
import CategoryList from './components/CategoryList';
import'./index.tsx'

export default function App() {
  const movieCategories = [
    {
      category: 'Animação',
      movies: [
        { title: 'Toy Story', image: require('./assets/filmes/toystory.jpg'), path: 'ToyStory' },
        { title: 'Zootopia', image: require('./assets/filmes/zootopia.jpg'), path: 'Zootopia' },
        { title: '101 Dalmatas', image: require('./assets/filmes/101.jpg'), path: '101' },
      ],
    },
    {
      category: 'Aventura',
      movies: [
        { title: 'O príncipe Esquecido', image: require('./assets/filmes/principe.jpg'), path: 'Principe' },
        { title: 'Rei Leão', image: require('./assets/filmes/reileao.jpg'), path: 'ReiLeao' },
        { title: 'Aladdin', image: require('./assets/filmes/alaadi.jpg'), path: 'Aladdin' },
      ],
    },
    {
      category: 'Comédia',
      movies: [
        { title: 'As Branquelas', image: require('./assets/filmes/asbranquelas.jpg'), path: 'AsBranquelas' },
        { title: 'Minha mãe é uma peça', image: require('./assets/filmes/minhamae.jpg'), path: 'MinhaMae' },
        { title: 'O Canditado Honesto', image: require('./assets/filmes/O_canditato_honesto.jpg'), path: 'OCanditadoHonesto' },
      ],
    },
    {
      category: 'Romance',
      movies: [
        { title: '10 Coisas que eu odeio em você', image: require('./assets/filmes/10coisass.jpg'), path: '10Coisass' },
        { title: 'Como eu era antes de vocé', image: require('./assets/filmes/como.jpg'), path: 'ReiLeao' },
        { title: 'Titanic', image: require('./assets/filmes/titanic.jpg'), path: 'Titanic' },
      ],
    },
    {
      category: 'Terror',
      movies: [
        { title: 'Anabelle', image: require('./assets/filmes/anabelle.jpg'), path: 'Anabelle' },
        { title: 'Cemitério Maldito: A Origem', image: require('./assets/filmes/cemitério.jpg'), path: 'Cemitério' },
        { title: 'Invocação do Mal', image: require('./assets/filmes/invocacao.jpg'), path: 'Invocacao' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {movieCategories.map(({ category, movies }, index) => (
        <CategoryList key={index} category={category} movies={movies} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
});
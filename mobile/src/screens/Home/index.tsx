import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
   const [games, setGames] = useState<GameCardProps[]>([]);
   const navigation = useNavigation();

   function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
      navigation.navigate('game', { id, title, bannerUrl });
   }

   useEffect(() => {
      fetch('http://192.168.0.14:4000/games')
         .then((response) => response.json())
         .then((data) => setGames(data));
   }, []);

   return (
      <Background>
         <SafeAreaView style={styles.container}>
            <Image source={logoImg} style={styles.logo} />
            <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />
            <FlatList
               data={games}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => <GameCard onPress={() => handleOpenGame(item)} data={item} />}
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={styles.contentList}
               horizontal
            />
         </SafeAreaView>
      </Background>
   );
}

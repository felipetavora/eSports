import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { theme } from '../../theme';
import { GameRouteParams } from '../../@types/navigation';
import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';

export default function Game() {
   const [duos, setDuos] = useState<DuoCardProps[]>([]);
   const [discordDuoSelected, setDiscordDuoSelected] = useState('');
   const route = useRoute();
   const navigantion = useNavigation();
   const game = route.params as GameRouteParams;

   function handleGoBack() {
      navigantion.goBack();
   }

   async function getDiscordUser(adsId: string) {
      fetch(`http://192.168.0.14:4000/ads/${adsId}/discord`)
         .then((response) => response.json())
         .then((data) => {
            setDiscordDuoSelected(data.discord);
         });
   }

   useEffect(() => {
      fetch(`http://192.168.0.14:4000/games/${game.id}/ads`)
         .then((response) => response.json())
         .then((data) => setDuos(data));
   }, []);

   return (
      <Background>
         <SafeAreaView style={styles.container}>
            <View style={styles.header}>
               <TouchableOpacity onPress={handleGoBack}>
                  <Entypo name="chevron-thin-left" color={theme.colors.caption_300} size={20} />
               </TouchableOpacity>
               <Image source={logoImg} style={styles.logo} />
               <View style={styles.right}></View>
            </View>
            <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode="cover" />
            <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
            <FlatList
               data={duos}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />}
               horizontal
               style={styles.containerList}
               contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
               showsHorizontalScrollIndicator={false}
               ListEmptyComponent={() => <Text style={styles.emptyListText}>Não há anúncios publicados ainda.</Text>}
            />
            <DuoMatch
               onClose={() => setDiscordDuoSelected('')}
               visible={discordDuoSelected.length > 0}
               discord={discordDuoSelected}
            />
         </SafeAreaView>
      </Background>
   );
}

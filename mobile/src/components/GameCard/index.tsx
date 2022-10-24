import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../theme';

export interface GameCardProps {
   id: string;
   title: string;
   _count: {
      ads: number;
   };
   bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
   data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
   return (
      <TouchableOpacity style={styles.container} {...rest}>
         <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
            <LinearGradient colors={theme.colors.footer} style={styles.footer}>
               <Text style={styles.name}>{data.title}</Text>
               <Text style={styles.ads}>{data._count.ads} Anúncios</Text>
            </LinearGradient>
         </ImageBackground>
      </TouchableOpacity>
   );
}

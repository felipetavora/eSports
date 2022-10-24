import { ColorValue, Text, View } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

interface InfoProps {
   label: string;
   value: string;
   colorValue?: ColorValue;
}

export function DuoInfo({ label, value, colorValue = theme.colors.text }: InfoProps) {
   return (
      <View style={styles.container}>
         <Text style={styles.label}>{label}</Text>
         <Text style={[styles.value, { color: colorValue }]} numberOfLines={1}>
            {value}
         </Text>
      </View>
   );
}

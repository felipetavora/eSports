import { useState } from 'react';
import { styles } from './styles';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../theme';
import { CheckCircle } from 'phosphor-react-native';
import { Heading } from '../Heading';

interface Props extends ModalProps {
   discord: string;
   onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
   const [isCopping, setIsCopping] = useState(false);

   async function handleCopyDiscordToClipboard() {
      setIsCopping(true);
      await Clipboard.setStringAsync(discord);
      Alert.alert('Discord copiado!', 'Usuário copiado para colar no Discord');
      setIsCopping(false);
   }

   return (
      <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
         <View style={styles.container}>
            <View style={styles.content}>
               <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                  <MaterialIcons name="close" size={20} color={theme.colors.caption_500} />
               </TouchableOpacity>
               <CheckCircle size={64} color={theme.colors.success} weight="bold" />
               <Heading
                  title="Let's Play!"
                  subtitle="Agora é só começar a jogar!"
                  style={{ alignItems: 'center', marginTop: 24 }}
               />
               <Text style={styles.label}>Adicione no Discord</Text>
               <TouchableOpacity onPress={handleCopyDiscordToClipboard} disabled={isCopping} style={styles.discordButton}>
                  <Text style={styles.discord}>{isCopping ? <ActivityIndicator color={theme.colors.primary} /> : discord}</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   );
}

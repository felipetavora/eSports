import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.overlay,
   },
   content: {
      width: 311,
      backgroundColor: theme.colors.shape,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
   },
   closeIcon: {
      alignSelf: 'flex-end',
      margin: 16,
   },
   label: {
      color: theme.colors.text,
      fontSize: theme.font_size.md,
      fontFamily: theme.font_family.semi_bold,
      marginTop: 24,
      marginBottom: 8,
   },
   discordButton: {
      width: 231,
      height: 48,
      backgroundColor: theme.colors.background_900,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginBottom: 32,
   },
   discord: {
      color: theme.colors.text,
      fontSize: theme.font_size.md,
      fontFamily: theme.font_family.regular,
   },
});

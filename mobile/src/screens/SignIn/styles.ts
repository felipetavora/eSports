import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      padding: 32,
   },
   logo: {
      width: 214,
      height: 120,
      marginTop: 74,
      marginBottom: 48,
   },
   button: {
      width: '100%',
      height: 36,
      borderRadius: 6,
      backgroundColor: theme.colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   buttonTitle: {
      color: theme.colors.text,
      fontFamily: theme.font_family.semi_bold,
      fontSize: theme.font_size.sm,
      marginLeft: 8,
   },
});

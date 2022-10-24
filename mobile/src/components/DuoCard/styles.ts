import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
   container: {
      width: 200,
      backgroundColor: theme.colors.shape,
      borderRadius: 8,
      padding: 20,
      marginRight: 16,
      alignItems: 'center',
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
      marginLeft: 6,
   },
});

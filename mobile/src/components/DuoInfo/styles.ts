import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
   container: {
      width: '100%',
      marginBottom: 16,
   },
   label: {
      color: theme.colors.caption_300,
      fontSize: theme.font_size.sm,
      fontFamily: theme.font_family.regular,
      marginBottom: 4,
   },
   value: {
      fontSize: theme.font_size.sm,
      fontFamily: theme.font_family.bold,
   },
});

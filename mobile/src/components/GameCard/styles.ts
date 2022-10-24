import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
   container: {
      marginRight: 24,
   },
   cover: {
      width: 220,
      height: 300,
      justifyContent: 'flex-end',
      borderRadius: 8,
      overflow: 'hidden',
   },
   footer: {
      width: '100%',
      height: 102,
      padding: 16,
      justifyContent: 'flex-end',
   },
   name: {
      color: theme.colors.text,
      fontSize: theme.font_size.md,
      fontFamily: theme.font_family.bold,
   },
   ads: {
      color: theme.colors.caption_300,
      fontSize: theme.font_size.md,
      fontFamily: theme.font_family.regular,
   },
});

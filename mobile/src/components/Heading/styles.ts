import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
   container: {
      width: '100%',
      padding: 32,
   },
   title: {
      color: theme.colors.text,
      fontSize: theme.font_size.lg,
      fontFamily: theme.font_family.black,
   },
   subtitle: {
      color: theme.colors.caption_400,
      fontSize: theme.font_size.md,
      fontFamily: theme.font_family.regular,
   },
});

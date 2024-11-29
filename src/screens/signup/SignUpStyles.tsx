import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    marginBottom: 128
  },
  title: {
    fontSize: 32,
    fontWeight: 700
  },
  inputContainer: {
    gap: 4
  },
  inputTitle: {
    fontSize: 18,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    width: 256,
    borderRadius: 12
  }
});
import { StyleSheet, Text, View } from "react-native";

export const Main = () => (
  <View style={styles.container}>
    <Text testID="app.container">Welcome to the app</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

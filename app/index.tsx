import { Text, View } from "react-native";
import MainComponent from "@/components/MainComponent"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainComponent></MainComponent>
    </View>
  );
}

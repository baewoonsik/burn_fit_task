import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

function Header(props) {
  return (
    <>
      <View style={S.header}>
        <Pressable
          onPress={props.moveToPreviousMonth.bind(this, props.month)}
          style={({ pressed }) => pressed && S.pressed}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <View style={{ flexDirection: "row" }}>
          <Text>{props.year}년 </Text>
          <Text>{props.month}월</Text>
        </View>
        <Pressable
          onPress={props.moveToNextMonth.bind(this, props.month)}
          style={({ pressed }) => pressed && S.pressed}
        >
          <Ionicons name="chevron-forward" size={24} color="black" />
        </Pressable>
      </View>
    </>
  );
}

export default Header;

const S = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.3,
  },
});

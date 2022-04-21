import { View, Text } from "react-native";

function PrimaryButton(props: any) {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}

export default PrimaryButton;

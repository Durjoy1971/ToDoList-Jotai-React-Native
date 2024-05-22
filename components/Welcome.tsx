import React from "react";
import { Image } from "react-native";
import { View } from "react-native";

export default function Welcome() {
  return (
    <View className="items-center">
      <Image
        source={require("../assets/welcome.png")}
        className="w-[355] h-[220] mt-40"
      />
    </View>
  );
}

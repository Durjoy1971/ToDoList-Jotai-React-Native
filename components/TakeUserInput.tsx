import { nameAtom } from "@/Store/Store";
import { useAtom } from "jotai";
import React from "react";
import { TextInput, View } from "react-native";

export default function TakeUserInput() {
  const [userName, setUserName] = useAtom(nameAtom);

  return (
    <View className="bg-blue-100 mt-14">
      <TextInput
        className="p-2 border-blue-400 border text-center text-teal-500 font-semibold text-xl"
        value={userName}
        onChangeText={(text) => setUserName(text)}
        placeholder="Enter Your User Name"
        autoCapitalize="words"
        placeholderTextColor={"black"}
      />
    </View>
  );
}

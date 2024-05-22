import { TextInput, View } from "react-native";
import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { nameAtom, singleTodoAtom } from "@/Store/Store";
import SubmitButton from "./SubmitButton";

export default function ToDOListInput() {
  const userName = useAtomValue(nameAtom);
  const user: string = `Enter Your Todo,  ${userName}`;
  const [todo, setTodo] = useAtom(singleTodoAtom);

  return (
    <View>
      <TextInput
        className="bg-blue-100 p-2 border-blue-400 border text-center text-teal-500 font-semibold text-lg mt-10"
        value={todo}
        placeholder={user}
        placeholderTextColor="black"
        onChangeText={(text) => setTodo(text)}
      />
      <SubmitButton />
    </View>
  );
}

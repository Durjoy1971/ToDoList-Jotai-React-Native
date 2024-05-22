import ToDoListWrapper from "@/components/ToDoListWrapper";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Page() {
  return (
    <View className="bg-blue-200 -mt-9">
      <View className="mt-9 px-4 h-screen ">
        <ToDoListWrapper />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

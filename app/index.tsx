import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Welcome from "@/components/Welcome";
import { useAtomValue } from "jotai";
import { nameAtom } from "@/Store/Store";
import TakeUserInput from "@/components/TakeUserInput";
import ContinueButton from "@/components/ContinueButton";

export default function Page() {
  const userName = useAtomValue(nameAtom);
  return (
    <View className="bg-blue-200 -mt-9">
      <View className="mt-9 px-4 h-screen">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Welcome />
          <TakeUserInput />
          {userName && <ContinueButton />}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

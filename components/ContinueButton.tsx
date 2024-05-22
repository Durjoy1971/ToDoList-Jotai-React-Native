import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function ContinueButton() {
  return (
    <View className="mt-20">
      <Link href="/sources" asChild>
        <Pressable className="bg-blue-100 w-[250] h-[50] border border-blue-400 rounded-lg mx-auto">
          <Text className="m-auto font-semibold ">CONTINUE</Text>
        </Pressable>
      </Link>
    </View>
  );
}

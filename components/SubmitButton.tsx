import { singleTodoAtom, todosAtom, userIdAtom } from "@/Store/Store";
import { useAtom } from "jotai";
import { Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function SubmitButton() {
  const [todo, setTodo] = useAtom(singleTodoAtom);
  const [todos, setTodos] = useAtom(todosAtom);
  const [userId, setUserId] = useAtom(userIdAtom);

  const addTodo = (todo: string) => {
    console.log(todos);
    setTodos([
      ...todos,
      { id: userId, task: todo, completed: false, isEditing: false },
    ]);
    setUserId((userId) => userId + 1);
  };
  return (
    <View className="mt-4">
      <Pressable
        className="m-auto"
        onPress={() => {
          if (todo.length > 0) {
            addTodo(todo);
            setTodo("");
          }
        }}
      >
        <Icon name="arrow-down-circle" size={35} color="teal" />
      </Pressable>
    </View>
  );
}

import { View } from "react-native";
import ToDOListInput from "./ToDoListInput";
import { ScrollView } from "react-native";
import { useAtomValue } from "jotai";
import { todosAtom } from "@/Store/Store";
import Todo from "./Todo";
import EditTodo from "./EditTodo";

export default function ToDoListWrapper() {
  const todos = useAtomValue(todosAtom);
  return (
    <View>
      <ToDOListInput />
      <ScrollView className="mb-[200] mt-10 focus:mb-[400]">
        {todos.map((todo) => {
          return todo.isEditing ? (
            <EditTodo key={todo.id} todo={todo} />
          ) : (
            <Todo key={todo.id} todo={todo} />
          );
        })}
      </ScrollView>
    </View>
  );
}

import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Delete from "react-native-vector-icons/AntDesign";
import { SingleTodo } from "@/Store/TypedScript";
import { useAtom } from "jotai";
import { todosAtom } from "@/Store/Store";

export default function Todo({ todo }: SingleTodo) {
  const { id, task, completed } = todo;
  const [todos, setTodos] = useAtom(todosAtom);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => id != todo.id));
  };

  const toogleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        id == todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <View className="flex flex-row px-1 py-3 bg-blue-100 mb-3">
      <View className="w-[80%] flex flex-row items-center">
        <Icon
          style={{ marginRight: 5 }}
          name={`${completed ? "check-circle" : "circle"}`}
          color="black"
          size={20}
          onPress={() => toogleTodo(id)}
        />
        <Text
          onPress={() => toogleTodo(id)}
          className={`w-[90%] text-justify p-[2] ${
            completed ? "line-through" : ""
          }`}
        >
          {task}
        </Text>
      </View>
      <View className="flex flex-row justify-center items-center w-[20%] ">
        <Pressable className="mr-[10]" onPress={() => editTodo(id)}>
          <Icon name="edit" color="blue" size={20} />
        </Pressable>
        <Pressable onPress={() => deleteTodo(id)}>
          <Delete name="delete" color="red" size={20} />
        </Pressable>
      </View>
    </View>
  );
}

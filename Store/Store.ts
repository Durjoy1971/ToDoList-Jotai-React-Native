import { atom } from "jotai";
import { Todos } from "./TypedScript";
import { atomWithStorage } from "jotai/utils";

const nameAtom = atom("");
const todosAtom = atomWithStorage<Todos[]>("todos", []);
const singleTodoAtom = atom("");
const userIdAtom = atom(1);

export { nameAtom, todosAtom, userIdAtom, singleTodoAtom };

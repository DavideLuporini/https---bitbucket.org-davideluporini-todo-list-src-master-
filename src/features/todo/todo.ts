import { Tag } from "./tag";

export interface Todo {
  text: string;
  id: number;
  completed: boolean;
  tag: string;
}

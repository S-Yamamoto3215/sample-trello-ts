export type TaskType = {
  id: string;
  draggableId: string;
  title: string;
}

export type CardType = {
  id: string;
  draggableId: string;
  title: string;
  tasks?: TaskType[];
}

import { useState } from "react";
import {
  Draggable,
  Droppable,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import type { DragItem } from "@/components/ui/draggable";

export interface Task extends DragItem {
  title: string;
  description?: string;
  status: "todo" | "in-progress" | "done";
}

const initialTasks: Task[] = [
  {
    id: "Kanban-1",
    type: "kanban-task",
    status: "todo",
    title: "Create drag and drop demo",
    description: "Build a component library for drag and drop functionality",
  },
  {
    id: "Kanban-2",
    type: "kanban-task",
    status: "todo",
    title: "Implement Draggable component",
    description: "Create a reusable draggable wrapper component",
  },
  {
    id: "Kanban-3",
    type: "kanban-task",
    status: "in-progress",
    title: "Add TypeScript types",
    description: "Ensure proper typing for all components",
  },
  {
    id: "Kanban-4",
    type: "kanban-task",
    status: "done",
    title: "Setup project structure",
    description: "Install dependencies and create component files",
  },
  {
    id: "Kanban-5",
    type: "kanban-task",
    status: "todo",
    title: "Write documentation",
    description: "Create comprehensive README with examples",
  },
  {
    id: "Kanban-6",
    type: "kanban-task",
    status: "in-progress",
    title: "Test functionality",
    description: "Ensure all component interactions work properly",
  },
];

export function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleDrop = (droppedItem: Task, columnStatus: Task["status"]) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === droppedItem.id ? { ...task, status: columnStatus } : task
      )
    );
  };

  const Column = ({
    title,
    status,
    tasks: columnTasks,
    className,
  }: {
    title: string;
    status: Task["status"];
    tasks: Task[];
    className?: string;
  }) => (
    <div className={`flex flex-col ${className}`}>
      <h2 className="text-lg font-semibold mb-4">🗂️ {title}</h2>
      <Droppable
        accept="kanban-task"
        onDrop={(item) => handleDrop(item as Task, status)}
        className="flex-1 min-h-[300px] rounded-lg border-2 border-dashed border-muted-foreground/25 p-4"
        hoverClassName="border-primary bg-primary/5"
        activeClassName="border-primary/50"
      >
        <div className="space-y-3">
          {columnTasks.map((task) => (
            <Draggable
              key={task.id}
              item={task}
              className="transform transition-all duration-200 hover:scale-[1.02]"
            >
              <Card className="cursor-grab active:cursor-grabbing">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{task.title}</CardTitle>
                </CardHeader>
                {task.description && (
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">
                      {task.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </Draggable>
          ))}
          {columnTasks.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              Drop tasks here
            </div>
          )}
        </div>
      </Droppable>
    </div>
  );

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div className="p-4 rounded-lg border bg-card text-card-foreground shadow">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Kanban Board Demo</h1>
        <p className="text-muted-foreground text-sm">
          Drag tasks between columns to change their status. This demonstrates
          the complete drag and drop functionality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Column
          title={`Todo (${todoTasks.length})`}
          status="todo"
          tasks={todoTasks}
        />
        <Column
          title={`In Progress (${inProgressTasks.length})`}
          status="in-progress"
          tasks={inProgressTasks}
        />
        <Column
          title={`Done (${doneTasks.length})`}
          status="done"
          tasks={doneTasks}
        />
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  DragAndDropProvider,
  Draggable,
  Droppable,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import type { DragItem } from "@/components/ui/draggable";

export const Route = createFileRoute("/")({
  component: App,
});

interface Task extends DragItem {
  title: string;
  description?: string;
  type: "todo" | "in-progress" | "done";
}

const initialTasks: Task[] = [
  {
    id: "1",
    type: "todo",
    title: "Create drag and drop demo",
    description: "Build a component library for drag and drop functionality",
  },
  {
    id: "2",
    type: "todo",
    title: "Implement Draggable component",
    description: "Create a reusable draggable wrapper component",
  },
  {
    id: "3",
    type: "in-progress",
    title: "Add TypeScript types",
    description: "Ensure proper typing for all components",
  },
  {
    id: "4",
    type: "done",
    title: "Setup project structure",
    description: "Install dependencies and create component files",
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleDrop = (droppedItem: Task, columnType: Task["type"]) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === droppedItem.id ? { ...task, type: columnType } : task
      )
    );
  };

  const Column = ({
    title,
    type,
    tasks: columnTasks,
    className,
  }: {
    title: string;
    type: Task["type"];
    tasks: Task[];
    className?: string;
  }) => (
    <div className={`flex flex-col ${className}`}>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <Droppable
        accept="task"
        onDrop={(item) => handleDrop(item as Task, type)}
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

  const todoTasks = tasks.filter((task) => task.type === "todo");
  const inProgressTasks = tasks.filter((task) => task.type === "in-progress");
  const doneTasks = tasks.filter((task) => task.type === "done");

  return (
    <DragAndDropProvider>
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Shadcn Drag & Drop Demo</h1>
          <p className="text-muted-foreground">
            Drag tasks between columns to change their status
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Column
            title={`Todo (${todoTasks.length})`}
            type="todo"
            tasks={todoTasks}
          />
          <Column
            title={`In Progress (${inProgressTasks.length})`}
            type="in-progress"
            tasks={inProgressTasks}
          />
          <Column
            title={`Done (${doneTasks.length})`}
            type="done"
            tasks={doneTasks}
          />
        </div>
      </div>
    </DragAndDropProvider>
  );
}

import { useState } from "react";
import { Draggable, Droppable } from "@/components/ui";

interface SortableItem {
  id: string;
  content: string;
}

export function SortableListDemo() {
  const [items, setItems] = useState<SortableItem[]>([
    { id: "sort-1", content: "First item" },
    { id: "sort-2", content: "Second item" },
    { id: "sort-3", content: "Third item" },
    { id: "sort-4", content: "Fourth item" },
  ]);

  const handleDrop = (draggedItem: any, targetIndex: number) => {
    const draggedIndex = items.findIndex((item) => item.id === draggedItem.id);

    if (draggedIndex === -1 || draggedIndex === targetIndex) return;

    const newItems = [...items];
    const [removed] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, removed);

    setItems(newItems);
  };

  return (
    <div className="p-4 rounded-lg border bg-card text-card-foreground shadow">
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold mb-1">Sortable List</h2>
        <p className="text-muted-foreground text-sm">
          Drag list items to reorder them
        </p>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <Droppable
            key={item.id}
            accept="sortable-item"
            onDrop={(draggedItem) => handleDrop(draggedItem, index)}
            className="transition-colors p-3 rounded border border-transparent hover:border-primary/20"
          >
            <Draggable
              item={{
                id: item.id,
                type: "sortable-item",
                content: item.content,
              }}
            >
              <div className="flex items-center gap-3 cursor-grab active:cursor-grabbing">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.content}</p>
                </div>
                <div className="flex-shrink-0 text-muted-foreground">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </div>
              </div>
            </Draggable>
          </Droppable>
        ))}
      </div>
    </div>
  );
}

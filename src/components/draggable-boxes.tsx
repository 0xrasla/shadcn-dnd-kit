import { useState } from "react";
import { Draggable, Droppable } from "@/components/ui";

export function DraggableBoxesDemo() {
  const [droppedItems, setDroppedItems] = useState<string[]>([]);

  const handleDrop = (item: any) => {
    setDroppedItems((prev) => [...prev, item.color]);
  };

  const handleRemoveItem = (index: number) => {
    setDroppedItems((prev) => prev.filter((_, i) => i !== index));
  };

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  return (
    <div className="p-4 rounded-lg border bg-card text-card-foreground shadow">
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold mb-1">Simple Drag & Drop</h2>
        <p className="text-muted-foreground text-sm">
          Drag colored boxes into the target area below
        </p>
      </div>

      <div className="space-y-4">
        {/* Source area with draggable boxes */}
        <div className="flex gap-2 flex-wrap justify-center">
          {colors.map((color) => (
            <Draggable
              key={color}
              item={{ id: `box-${color}`, type: "drag-box", color }}
              className="transition-transform hover:scale-105"
            >
              <div
                className={`w-12 h-12 rounded cursor-grab active:cursor-grabbing ${color} shadow-sm`}
                title={color.replace("bg-", "").replace("-500", "")}
              />
            </Draggable>
          ))}
        </div>

        {/* Drop zone */}
        <Droppable
          accept="drag-box"
          onDrop={handleDrop}
          className="min-h-[60px] border-2 border-dashed border-muted-foreground/25 rounded-lg p-4"
          hoverClassName="border-primary bg-primary/5"
          activeClassName="border-primary/50"
        >
          <div className="space-y-2">
            <p className="text-sm text-center text-muted-foreground">
              Drag boxes here
            </p>
            {droppedItems.length > 0 && (
              <div className="flex gap-2 flex-wrap justify-center">
                {droppedItems.map((color, index) => (
                  <div
                    key={`${color}-${index}`}
                    className={`w-8 h-8 rounded cursor-pointer ${color} shadow-sm opacity-75 hover:opacity-100 transition-opacity`}
                    onClick={() => handleRemoveItem(index)}
                    title="Click to remove"
                  />
                ))}
              </div>
            )}
          </div>
        </Droppable>

        {droppedItems.length > 0 && (
          <p className="text-sm text-center text-muted-foreground">
            Click colored boxes to remove them
          </p>
        )}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import * as React from "react";
import { useDrag } from "react-dnd";

export interface DragItem {
  id: string;
  type: string;
  [key: string]: any;
}

interface DraggableProps {
  children: React.ReactNode;
  item: DragItem;
  className?: string;
  disabled?: boolean;
  dragPreview?: React.ReactNode;
  onDragStart?: (item: DragItem) => void;
  onDragEnd?: (item: DragItem, dropResult: any) => void;
}

const Draggable = React.forwardRef<
  HTMLDivElement,
  DraggableProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      children,
      item,
      className,
      disabled = false,
      dragPreview,
      onDragStart,
      onDragEnd,
      ...props
    },
    ref
  ) => {
    const [{ isDragging }, dragRef] = useDrag<
      DragItem,
      DragItem,
      { isDragging: boolean }
    >({
      type: item.type,
      item,
      canDrag: !disabled,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const combinedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        // Set up refs
        dragRef(node);
        if (ref) {
          if (typeof ref === "function") {
            ref(node);
          } else {
            ref.current = node;
          }
        }
      },
      [dragRef, ref]
    );

    return (
      <div
        ref={combinedRef}
        className={cn(
          "relative transition-all duration-200 ease-in-out",
          isDragging && "opacity-50 scale-105 rotate-2",
          !disabled && !isDragging && "cursor-grab active:cursor-grabbing",
          disabled && "cursor-not-allowed opacity-60",
          className
        )}
        data-slot="draggable"
        {...props}
      >
        {children}
        {isDragging && dragPreview && (
          <div className="absolute inset-0 pointer-events-none">
            {dragPreview}
          </div>
        )}
      </div>
    );
  }
);

Draggable.displayName = "Draggable";

export { Draggable };

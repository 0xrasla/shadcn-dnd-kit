import { cn } from "@/lib/utils";
import * as React from "react";
import { useDrop } from "react-dnd";

export interface DroppableProps {
  accept: string | string[];
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onDrop?: (item: any, monitor: any) => void;
  onDragOver?: (item: any, monitor: any) => void;
  onDragLeave?: () => void;
  hoverClassName?: string;
  canDropClassName?: string;
  activeClassName?: string;
  disabledClassName?: string;
}

const Droppable = React.forwardRef<
  HTMLDivElement,
  DroppableProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      accept,
      children,
      className,
      disabled = false,
      onDrop,
      onDragOver,
      onDragLeave,
      hoverClassName,
      canDropClassName,
      activeClassName,
      disabledClassName,
      ...props
    },
    ref
  ) => {
    const [{ canDrop, isOver }, dropRef] = useDrop<
      any,
      any,
      { canDrop: boolean; isOver: boolean }
    >({
      accept,
      canDrop: () => !disabled,
      drop: (item, monitor) => {
        onDrop?.(item, monitor);
        return;
      },
      hover: (item, monitor) => {
        onDragOver?.(item, monitor);
      },
      collect: (monitor) => ({
        canDrop: monitor.canDrop(),
        isOver: monitor.isOver(),
      }),
    });

    const combinedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        // Set up refs
        dropRef(node);
        if (ref) {
          if (typeof ref === "function") {
            ref(node);
          } else {
            ref.current = node;
          }
        }
      },
      [dropRef, ref]
    );

    return (
      <div
        ref={combinedRef}
        className={cn(
          "relative transition-all duration-200 ease-in-out",
          isOver && canDrop && hoverClassName,
          canDrop && !isOver && canDropClassName,
          isOver && activeClassName,
          disabled && disabledClassName,
          className
        )}
        data-slot="droppable"
        {...props}
      >
        {children}
      </div>
    );
  }
);

Droppable.displayName = "Droppable";

export { Droppable };

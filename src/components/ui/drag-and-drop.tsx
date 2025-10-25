import * as React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export interface DragAndDropProviderProps {
  children: React.ReactNode;
}

/**
 * Provider component that wraps your application to enable drag and drop functionality.
 * Uses HTML5 backend for handling drag and drop in the browser.
 */
const DragAndDropProvider = React.forwardRef<
  HTMLDivElement,
  DragAndDropProviderProps
>(({ children }, ref) => {
  return (
    <div ref={ref} data-slot="drag-and-drop-provider">
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </div>
  );
});

DragAndDropProvider.displayName = "DragAndDropProvider";

export { DragAndDropProvider };

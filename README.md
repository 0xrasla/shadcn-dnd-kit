# Shadcn Drag & Drop

A custom drag-and-drop component library built on top of `react-dnd` with shadcn/ui styling. These components provide a clean, accessible, and highly customizable way to implement drag-and-drop functionality in your React applications.

## Features

- 🎨 **Shadcn/ui Styling**: Consistent with shadcn/ui design system
- 🔧 **TypeScript Support**: Fully typed with comprehensive type definitions
- 🎯 **React DnD Integration**: Built on proven react-dnd library
- ♿ **Accessibility**: Proper ARIA attributes and keyboard interaction
- 🎨 **Customizable**: Extensive styling and behavior customization options
- 📱 **Responsive**: Works seamlessly across all screen sizes

## Installation

Install the required dependencies:

```bash
bun add react-dnd react-dnd-html5-backend @types/react-dnd
```

The components are designed to work with shadcn/ui, so make sure you have it set up in your project.

## Files

All the components you need to add drag and drop to your project:

### Core Components

| Component           | Description                                      | View Code                                                                                         |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `draggable.tsx`     | The main draggable wrapper component             | [View](https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/ui/draggable.tsx)     |
| `droppable.tsx`     | Drop zone component that accepts draggable items | [View](https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/ui/droppable.tsx)     |
| `drag-and-drop.tsx` | React DnD provider wrapper for your app          | [View](https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/ui/drag-and-drop.tsx) |

### Demo Components

| Component             | Description                          | View Code                                                                                        |
| --------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `kanban-board.tsx`    | Complete kanban board demo component | [View](https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/kanban-board.tsx)    |
| `draggable-boxes.tsx` | Simple drag and drop boxes demo      | [View](https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/draggable-boxes.tsx) |
| `sortable-list.tsx`   | Reorderable list items demo          | [View](https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/sortable-list.tsx)   |

### Theme Components

| Component            | Description                       | View Code                                                                                          |
| -------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------- |
| `mode-toggle.tsx`    | Light/dark theme toggle component | [View](https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/ui/mode-toggle.tsx)    |
| `theme-provider.tsx` | Next.js themes provider wrapper   | [View](https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/ui/theme-provider.tsx) |

### Key Files

| File        | Path                    | Description                  |
| ----------- | ----------------------- | ---------------------------- | ----------------------------------------------------------------------------------- |
| Homepage    | `src/routes/index.tsx`  | Main landing page with demos | [View](https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/routes/index.tsx)  |
| Root Layout | `src/routes/__root.tsx` | App root with theme provider | [View](https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/routes/__root.tsx) |

## Quick Start

First, wrap your application with the `DragAndDropProvider`:

```tsx
import { DragAndDropProvider } from "@/components/ui";

function App() {
  return <DragAndDropProvider>{/* Your app content */}</DragAndDropProvider>;
}
```

Then use the `Draggable` and `Droppable` components:

```tsx
import { Draggable, Droppable, Card, CardContent } from "@/components/ui";

// Define drag items
const items = [
  { id: "1", type: "item", title: "Item 1" },
  { id: "2", type: "item", title: "Item 2" },
];

function MyComponent() {
  const handleDrop = (item, monitor) => {
    console.log("Dropped item:", item);
  };

  return (
    <Droppable
      accept="item"
      onDrop={handleDrop}
      className="p-4 border-2 border-dashed min-h-[200px]"
    >
      {items.map((item) => (
        <Draggable key={item.id} item={item}>
          <Card className="mb-2 cursor-grab">
            <CardContent className="p-4">{item.title}</CardContent>
          </Card>
        </Draggable>
      ))}
    </Droppable>
  );
}
```

## Components

### DragAndDropProvider

The root provider that enables drag and drop functionality using HTML5 backend.

```tsx
<DragAndDropProvider>{/* Your drag and drop content */}</DragAndDropProvider>
```

### Draggable

Makes any element draggable. Wraps your content and handles the drag behavior.

```tsx
interface DragItem {
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
```

#### Example:

```tsx
<Draggable
  item={{ id: "card-1", type: "card", data: "some data" }}
  onDragStart={(item) => console.log("Started dragging:", item)}
  onDragEnd={(item, result) => console.log("Dropped:", item, result)}
  className="hover:scale-105"
>
  <Card>Drag me!</Card>
</Draggable>
```

### Droppable

Creates a drop zone where draggable items can be dropped.

```tsx
interface DroppableProps {
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
```

#### Example:

```tsx
<Droppable
  accept="card"
  onDrop={(item) => handleItemDrop(item)}
  className="min-h-[200px] border-2 border-dashed p-4"
  hoverClassName="border-primary bg-primary/5"
  activeClassName="border-primary/50"
>
  <div>Drop cards here</div>
</Droppable>
```

## Advanced Examples

### Kanban Board

```tsx
import { useState } from "react";
import {
  DragAndDropProvider,
  Draggable,
  Droppable,
  Card,
} from "@/components/ui";

function KanbanBoard() {
  const [cards, setCards] = useState([
    { id: "1", type: "task", title: "Task 1", status: "todo" },
    { id: "2", type: "task", title: "Task 2", status: "done" },
  ]);

  const moveCard = (cardId, newStatus) => {
    setCards(
      cards.map((card) =>
        card.id === cardId ? { ...card, status: newStatus } : card
      )
    );
  };

  const Column = ({ status, title }) => {
    const columnCards = cards.filter((card) => card.status === status);

    return (
      <div>
        <h2>{title}</h2>
        <Droppable
          accept="task"
          onDrop={(item) => moveCard(item.id, status)}
          className="min-h-[300px] p-4 border rounded"
        >
          {columnCards.map((card) => (
            <Draggable key={card.id} item={card}>
              <Card className="mb-2">{card.title}</Card>
            </Draggable>
          ))}
        </Droppable>
      </div>
    );
  };

  return (
    <DragAndDropProvider>
      <div className="flex gap-4">
        <Column status="todo" title="To Do" />
        <Column status="in-progress" title="In Progress" />
        <Column status="done" title="Done" />
      </div>
    </DragAndDropProvider>
  );
}
```

### Custom Drag Preview

```tsx
<Draggable
  item={{ id: "item-1", type: "item" }}
  dragPreview={<div className="opacity-75 scale-110">Custom Preview</div>}
>
  <div>Drag me</div>
</Draggable>
```

### Sortable List

```tsx
function SortableList() {
  const [items, setItems] = useState([
    { id: "1", type: "sortable", content: "Item 1" },
    { id: "2", type: "sortable", content: "Item 2" },
  ]);

  const [draggedOverIndex, setDraggedOverIndex] = useState<number | null>(null);

  const handleDragOver = (item, monitor) => {
    const offset = monitor.getClientOffset();
    // Calculate which index the item is hovering over
    // ... logic to determine index
  };

  const handleDrop = (item, index) => {
    // Reorder items
    setItems((prevItems) => {
      // ... reorder logic
    });
    setDraggedOverIndex(null);
  };

  return items.map((item, index) => (
    <Droppable
      key={item.id}
      accept="sortable"
      onDrop={(droppedItem) => handleDrop(droppedItem, index)}
      onDragOver={handleDragOver}
      className={cn("p-2", draggedOverIndex === index && "bg-accent")}
    >
      <Draggable item={item}>
        <div>{item.content}</div>
      </Draggable>
    </Droppable>
  ));
}
```

## Styling

All components support standard shadcn/ui styling through the `className` prop and specific state-based className props:

- `hoverClassName`: Applied when dragging over a droppable area
- `canDropClassName`: Applied when drag can drop on this area
- `activeClassName`: Applied when actively hovering over droppable
- `disabledClassName`: Applied when component is disabled

### CSS Variables

The components use your existing shadcn/ui color scheme:

- `primary`: Accent color for active states
- `muted-foreground`: Default drop zone styling
- `accent`: Highlight colors

### Custom Animations

```tsx
<Draggable
  item={{ id: "item", type: "item" }}
  className="transition-all duration-200 hover:scale-105 hover:shadow-lg"
/>
```

## TypeScript Support

All components are fully typed. Import the interfaces:

```tsx
import type { DragItem, DraggableProps, DroppableProps } from "@/components/ui";
```

## Accessibility

- Proper ARIA attributes for screen readers
- Keyboard navigation support (inherited from react-dnd)
- Focus management during drag operations
- Visual feedback for all interaction states

## Performance

- Built on react-dnd's optimized render cycles
- Minimal re-renders through proper memoization
- Efficient monitoring of drag state changes

## Browser Support

Supported browsers match react-dnd's requirements:

- Chrome 65+
- Firefox 55+
- Safari 11+
- Edge 79+

## Contributing

1. Follow shadcn/ui design patterns
2. Maintain TypeScript strictness
3. Include proper tests
4. Update documentation for new features

## License

This project is part of your shadcn/ui setup and follows the same licensing terms.

# shadcn-dnd-kit

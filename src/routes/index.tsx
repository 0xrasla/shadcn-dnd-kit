import { createFileRoute, useRouter } from "@tanstack/react-router";
import { KanbanBoard } from "@/components/kanban-board";
import { DraggableBoxesDemo } from "@/components/draggable-boxes";
import { SortableListDemo } from "@/components/sortable-list";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DragAndDropProvider } from "@/components/ui";
import { ArrowRight, Star, Zap, Code, Palette, Smartphone } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">shadcn-drag</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/0xrasla/shadcn-dnd-kit"
                className="text-sm font-medium hover:underline"
              >
                Docs
              </a>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-secondary px-3 py-1 rounded-full text-sm">
              <Star className="w-4 h-4 fill-current" />
              <span>Built with React DnD & shadcn/ui</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Modern Drag & Drop
            <br />
            <span className="text-primary">Components</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            A comprehensive drag and drop component library built on top of
            react-dnd with seamless shadcn/ui integration. Beautiful,
            accessible, and incredibly easy to use.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => {
                window.open(
                  "https://github.com/0xrasla/shadcn-dnd-kit",
                  "_blank"
                );
              }}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose shadcn-drag?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with performance, accessibility and developer experience in
              mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="mb-2">Blazing Fast</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Optimized performance with minimal re-renders and efficient
                  event handling.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="mb-2">TypeScript First</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fully typed components with comprehensive interfaces and type
                  safety.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="mb-2">Beautiful Design</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Seamlessly integrates with shadcn/ui for consistent, modern
                  aesthetics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="mb-2">Fully Responsive</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Works perfectly across all screen sizes with touch and mouse
                  support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">♿</div>
                </div>
                <CardTitle className="mb-2">Accessible</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Proper ARIA attributes and keyboard navigation support
                  built-in.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">⚡</div>
                </div>
                <CardTitle className="mb-2">Plug & Play</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Just wrap your content and start dragging. No complex setup
                  required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interactive Examples</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the components in action. Try dragging the items below!
            </p>
          </div>

          <DragAndDropProvider>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <KanbanBoard />
              </div>
              <div className="col-span-1 md:col-span-1 space-y-6">
                <DraggableBoxesDemo />
                <SortableListDemo />
              </div>
            </div>
          </DragAndDropProvider>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Files</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All the components you need to add drag and drop to your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-mono">
                    draggable.tsx
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <a
                        href="https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/ui/draggable.tsx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View
                      </a>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  The main draggable wrapper component
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary rounded p-3 font-mono text-sm">
                  import {"{ Draggable }"} from "@/components/ui/draggable"
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-mono">
                    droppable.tsx
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <a
                        href="https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/ui/droppable.tsx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View
                      </a>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Drop zone component that accepts draggable items
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary rounded p-3 font-mono text-sm">
                  import {"{ Droppable }"} from "@/components/ui/droppable"
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-mono">
                    drag-and-drop.tsx
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <a
                        href="https://github.com/0xrasla/shadcn-dnd-kit/blob/master/src/components/ui/drag-and-drop.tsx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View
                      </a>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  React DnD provider wrapper for your app
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary rounded p-3 font-mono text-sm">
                  import {"{ DragAndDropProvider }"} from
                  "@/components/ui/drag-and-drop"
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Installation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary rounded-lg p-4 font-mono text-sm">
                <div className="text-muted-foreground mb-2">
                  # Install dependencies
                </div>
                <div>
                  bun add react-dnd react-dnd-html5-backend @types/react-dnd
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Quick Usage</h4>
                  <div className="bg-secondary rounded-lg p-3 font-mono text-sm">
                    <div>
                      import &#123; Draggable, Droppable, DragAndDropProvider
                      &#125; from "@/components/ui";
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Provider Setup</h4>
                  <div className="bg-secondary rounded-lg p-3 font-mono text-sm text-foreground">
                    {"<DragAndDropProvider>"}
                    <br />
                    <span className="pl-4 text-muted-foreground">
                      {"{/* Your app */}"}
                    </span>
                    <br />
                    {"</DragAndDropProvider>"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <Zap className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="font-semibold">shadcn-drag</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

import tkinter as tk

CELL_SIZE = 12
ROWS = 35
COLS = 50

class GameOfLifeGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Conway's Game of Life")

        self.grid = [[0 for _ in range(COLS)] for _ in range(ROWS)]
        self.running = False

        self.canvas = tk.Canvas(root, width=COLS * CELL_SIZE, height=ROWS * CELL_SIZE, bg="white")
        self.canvas.pack()

        self.canvas.bind("<Button-1>", self.on_click)
        self.canvas.bind("<B1-Motion>", self.on_click)

        self.root.bind("<space>", self.toggle_play)

        self.label = tk.Label(root, text="Click b la souris bach t-rsem | Espace: Play/Pause", font=("Arial", 11))
        self.label.pack(pady=5)

        self.draw_grid()

    def draw_grid(self):
        self.canvas.delete("all")
        for r in range(ROWS):
            for c in range(COLS):
                x1 = c * CELL_SIZE
                y1 = r * CELL_SIZE
                x2 = x1 + CELL_SIZE
                y2 = y1 + CELL_SIZE
                color = "black" if self.grid[r][c] == 1 else "white"
                self.canvas.create_rectangle(x1, y1, x2, y2, fill=color, outline="#ddd")

    def on_click(self, event):
        col = event.x // CELL_SIZE
        row = event.y // CELL_SIZE
        if 0 <= row < ROWS and 0 <= col < COLS:
            self.grid[row][col] = 1
            self.draw_grid()

    def toggle_play(self, event=None):
        self.running = not self.running
        if self.running:
            self.label.config(text="Status: Kheddam (Play) | Espace: Pause")
            self.run_generation()
        else:
            self.label.config(text="Status: Mweqqef (Pause) | Espace: Play")

    def count_neighbors(self, r, c):
        count = 0
        for dr in [-1, 0, 1]:
            for dc in [-1, 0, 1]:
                if dr == 0 and dc == 0:
                    continue
                nr = (r + dr) % ROWS
                nc = (c + dc) % COLS
                count += self.grid[nr][nc]
        return count

    def run_generation(self):
        if not self.running:
            return

        new_grid = [[0 for _ in range(COLS)] for _ in range(ROWS)]
        for r in range(ROWS):
            for c in range(COLS):
                neighbors = self.count_neighbors(r, c)
                if self.grid[r][c] == 1:
                    if neighbors in [2, 3]:
                        new_grid[r][c] = 1
                else:
                    if neighbors == 3:
                        new_grid[r][c] = 1

        self.grid = new_grid
        self.draw_grid()
        self.root.after(100, self.run_generation)

if __name__ == "__main__":
    root = tk.Tk()
    app = GameOfLifeGUI(root)
    root.mainloop()
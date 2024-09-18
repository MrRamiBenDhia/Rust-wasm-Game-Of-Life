
# 🕹️ Conway's Game of Life in Rust + WebAssembly 🦀 

Welcome to my implementation of **Conway's Game of Life** built with Rust and compiled into WebAssembly! 🎮 This project brings the famous zero-player game right to your browser, showcasing the beauty of cellular automata, all powered by Rust's efficiency. 🦀

![Game of Life Example](https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)

## 🌱 What is the Game of Life?

Conway's Game of Life is a **cellular automaton** invented by mathematician John Conway in 1970. It's a simulation that evolves based on simple rules applied to a grid of cells, each of which can be either "alive" 🟢 or "dead" ⚫. Though the rules are simple, the game can generate incredibly complex and beautiful patterns over time!

## 🎮 Game Rules

The game is played on an infinite two-dimensional grid of square cells, where each cell has one of two possible states:

- **Alive** 🟢
- **Dead** ⚫

### The Four Simple Rules

Each step of the game, the following rules are applied to all cells:

1. **Underpopulation** 🏜️: Any live cell with fewer than 2 live neighbors dies (as if by loneliness).
2. **Overcrowding** 🌆: Any live cell with more than 3 live neighbors dies (as if by overpopulation).
3. **Survival** 🛡️: Any live cell with 2 or 3 live neighbors survives.
4. **Reproduction** 👶: Any dead cell with exactly 3 live neighbors becomes alive.

These simple rules give rise to a wide variety of behaviors, from **still lifes** (patterns that don't change), to **oscillators** (patterns that repeat), and even **spaceships** 🚀 (patterns that move across the grid)!

## 🌐 WebAssembly Integration

This project compiles the Game of Life in Rust to WebAssembly, allowing it to run at near-native speeds in any modern web browser! 🖥️ Rust's powerful type system ensures efficient and safe handling of memory, while WebAssembly provides a perfect medium for deploying Rust code to the web.

## 🧑‍💻 Installation & Usage

To run this project locally, you'll need to have `wasm-pack` installed. You can then clone this repository and follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/game-of-life-wasm.git
   cd game-of-life-wasm
   ```

2. **Build the project**:
   ```bash
   wasm-pack build
   ```

3. **Run the project** (using a local server):
   ```bash
   npm install
   npm start
   ```

4. Open your browser at `http://localhost:8080` to play the Game of Life! 🕹️

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

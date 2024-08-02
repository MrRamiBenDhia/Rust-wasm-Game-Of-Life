declare module "wasm-game-of-life" {
    export class Universe {
      static new(): Universe;
      tick(): void;
      cells(): number;
      width(): number;
      height(): number;
      toggle_cell(row: number, col: number): void;
    }
  
    export enum Cell {
      Dead = 0,
      Alive = 1,
    }
  }
  
/* tslint:disable */
/* eslint-disable */
export enum Cell {
  Dead = 0,
  Alive = 1,
}
export class Universe {
  free(): void;
  /**
   * @param {number} width
   * @param {number} height
   * @returns {Universe}
   */
  static new(width: number, height: number): Universe;
  /**
   * @param {number} row
   * @param {number} column
   */
  toggle_cell(row: number, column: number): void;
  /**
   * @returns {number}
   */
  width(): number;
  /**
   * @returns {number}
   */
  height(): number;
  /**
   * @param {number} width
   */
  set_width(width: number): void;
  /**
   * @param {number} height
   */
  set_height(height: number): void;
  /**
   * @returns {number}
   */
  cells(): number;
  tick(): void;
  /**
   * @returns {string}
   */
  render(): string;
}

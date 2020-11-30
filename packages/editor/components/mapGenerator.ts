const config = {
  MAP_SIZE: 50,
  TILE_SIZE: 50,
};

type Coordinate = {
  x: number;
  y: number;
};

function shuffle<T>(a: T[]):T[] {
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const DIRECTIONS:Coordinate[] = [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }];

function random(max: number) {
  return Math.floor(Math.random() * max);
}

const createEmpty2DArray = (size: number): undefined[][] => Array(size)
  .fill(undefined)
  .map(() => Array(size).fill(undefined) as undefined[]);

function isMoveExsist(coordinate:Coordinate): boolean {
  return coordinate.x < config.MAP_SIZE && coordinate.x >= 0 && coordinate.y < config.MAP_SIZE && coordinate.y >= 0;
}

function randomMove(current: Coordinate): Coordinate | null {
  // eslint-disable-next-line no-restricted-syntax
  for (const direction of shuffle([...DIRECTIONS])) {
    const moveCandidate: Coordinate = { x: direction.x + current.x, y: direction.y + current.y };
    if (isMoveExsist(moveCandidate)) return moveCandidate;
  }
  return null;
}

export default function mapGenerator() {
  const tries = 5000;
  const tiles = createEmpty2DArray(config.MAP_SIZE) as (Record<string, unknown> | undefined)[][];
  const startCoordinate: Coordinate = { x: random(config.MAP_SIZE), y: random(config.MAP_SIZE) };
  const moves = [startCoordinate];

  for (let i = 1; i < tries; i += 1) {
    const lastCords = moves[i - 1];
    const nextMove = randomMove(lastCords);
    if (!nextMove) break;
    tiles[nextMove.x][nextMove.y] = {};
    moves.push(nextMove);
  }

  return { tiles, config };
}

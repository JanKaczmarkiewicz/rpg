const config = {
  MAP_SIZE: 50,
  TILE_SIZE: 40,
};

type Coordinate = {
  x: number;
  y: number;
};

type Enemy = {
  type: 'ENEMY',
  sprite: string,
  level: number,
};

type Tresure = {
  type: 'TRESURE',
  sprite: string,
};

type Wall = {
  type: 'WALL',
  sprite: string,
};

export type Tile = {
  content: Enemy | Wall | Tresure | null,
  sprite: string
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
  const tiles = createEmpty2DArray(config.MAP_SIZE) as unknown as (Tile | undefined)[][];
  const startCoordinate: Coordinate = { x: random(config.MAP_SIZE), y: random(config.MAP_SIZE) };
  const moves = [startCoordinate];

  for (let i = 1; i < tries; i += 1) {
    const lastCords = moves[i - 1];
    const nextMove = randomMove(lastCords);

    if (!nextMove) {
      break;
    }

    let content: Tile['content'] = null;

    if (Math.random() < 0.01) { content = { type: 'ENEMY', sprite: 'enemy', level: 50 }; }
    // if (Math.random() < 0.01) { content = { type: 'TRESURE', sprite: 'tresure' }; }

    tiles[nextMove.x][nextMove.y] = { content, sprite: 'floor' };
    moves.push(nextMove);
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const row of tiles) {
    for (let i = 0; i < row.length; i += 1) {
      if (!row[i]) {
        row[i] = { content: { type: 'WALL', sprite: 'wall' }, sprite: 'floor' };
      }
    }
  }

  return { tiles, config };
}

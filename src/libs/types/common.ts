export interface T {
  [key: string]: any;
}

export interface Statistics{
  products: ProdStats;
  users: UserStats;
}

export interface ProdStats{
  process: number;
  pause: number;
  delete: number;
}

export interface UserStats{
  active: number;
  block: number;
  delete: number;
}
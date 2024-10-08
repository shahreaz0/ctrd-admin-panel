export const STATUS = {
  fakir: 1,
  miskin: 2,
  amilin: 3,
  muallatulKutub: 4,
  rikkab: 5,
  garimin: 6,
  fiSabilillah: 7,
} as const;

export const GENDER = {
  male: 0,
  female: 1,
  other: 2,
} as const;

export const CONDITION = {
  red: 0,
  green: 1,
  yellow: 2,
} as const;

export const ACCEPTANCE_STATUS = {
  Pending: 0,
  Accepted: 1,
  Rejected: 2,
} as const;

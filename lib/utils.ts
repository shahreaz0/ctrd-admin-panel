import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(seed: string) {
  return `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&fontSize=36&fontWeight=600`;
}

export function getKeyByValue<T extends Record<string, number>>(
  object: T,
  value: number
) {
  return Object.keys(object).find((key) => object[key] === value);
}

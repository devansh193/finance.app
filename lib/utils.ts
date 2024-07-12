import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function convertAmountToMiliUnits(amount: number){
  return Math.round(amount * 100);
};

export function convertAmountFromMiliUnits(amount: number){
  return amount / 100;
};

export function formatCurrency(value: number){ 
  return Intl.NumberFormat("en-us",{
    style:"currency",
    currency:"INR",
    minimumFractionDigits: 2,
  }).format(value);
};

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
const bcrypt = require('bcrypt');
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}





export async function hashPassword(password : string) {
    try {
        // Generate a salt
        const saltRounds = 10; // You can adjust the number of salt rounds
        const salt = await bcrypt.genSalt(saltRounds);
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
        throw error;
    }
}




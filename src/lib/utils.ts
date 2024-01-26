import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return date.toLocaleDateString("en-US", options);
}

export function getInitials(name: string) {
	const parts = name.split(" ") as [string] | [string, string];
	const firstNameInitial = parts[0][0] as string;
	if (parts.length === 1) {
		return firstNameInitial;
	}
	const lastNameInitial = (parts[parts.length - 1] as string)[0] as string;
	return firstNameInitial + lastNameInitial;
}

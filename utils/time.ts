export const getRelativeTimeFromDates = (date: Date) => {
	const now = new Date();
	let diff;
	if (date.getTime() > now.getTime()) {
		diff = date.getTime() - now.getTime();
	} else {
		diff = now.getTime() - date.getTime();
	}

	return convertDurationToTimeString(Math.floor(diff / 1000));
};

export const convertDurationToTimeString = (duration: number): string => {
	const days = Math.floor(duration / 86400);
	const weeks = Math.floor(duration / 604800);
	const months = Math.floor(duration / 2628000);
	const years = Math.floor(duration / 31536000);
	const hours = Math.floor(duration / 3600);
	const minutes = Math.floor((duration % 3600) / 60);
	const seconds = duration % 60;
	return `${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

export const uuid = () => {
	const min = 0
	const max = 1000000
    let num = Math.random() * (max - min) + min;

    return Math.floor(num);
};
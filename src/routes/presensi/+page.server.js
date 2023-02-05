import { tanggal } from "../../lib/js/datetime";

export const load = async () => {
	const res = await fetch(`https://main.pltdktm.com/${tanggal()}`);
	const data = res.json();

	return data;
};

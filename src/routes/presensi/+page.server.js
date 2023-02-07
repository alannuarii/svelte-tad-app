import { getToday } from "../../lib/js/datetime";

export const load = async () => {
	const res = await fetch(`https://pltdktm.anpy.my.id/presensi/${getToday()}`);
	const data = res.json();

	return data;
};

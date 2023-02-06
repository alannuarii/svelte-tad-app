import { redirect } from '@sveltejs/kit';
import { tad } from '../lib/js/nama';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('nama', data.get('nama'));
		formData.append('waktu', data.get('waktu'));
		formData.append('foto', data.get('foto'));

		// for (const [name, value] of formData) {
		// 	if (tad.includes(value)) {
		// 		const res = await fetch('https://pltdktm.anpy.my.id/presensi', {
		// 			method: 'POST',
		// 			body: formData
		// 		});
		// 		console.log(res);

		// 		throw redirect(302, '/presensi');
		// 	} else {
		// 		const message = 'Anda belum memilih nama';
		// 		return message;
		// 	}
		// }

		const res = await fetch('https://pltdktm.anpy.my.id/presensi', {
			method: 'POST',
			body: formData
		});

		return await res.json();
	}
};

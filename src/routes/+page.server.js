export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		// formData.append('foto', data.get('foto'));
		formData.append('nama', data.get('nama'));
		formData.append('waktu', data.get('waktu'));

		const res = await fetch('http://127.0.0.1:5000/presensi', {
			method: 'POST',
			body: formData
		});

		return await res.json();
	}
};

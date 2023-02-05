export function date(tanggal) {
	const date = new Date(tanggal);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options);
	return result;
}

export function datetime(tanggal) {
	const date = new Date(tanggal);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const timeoptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
	const result = `${date.toLocaleDateString('id-ID', options)} Pukul ${date.toLocaleTimeString(
		'id-ID',
		timeoptions
	)}`;
	return result;
}

export const waktu = (time) => {
	const datetime = new Date();
	const year = datetime.getFullYear();
	const month = (datetime.getMonth() + 1).toString().padStart(2, '0');
	const day = datetime.getDate().toString().padStart(2, '0');
	const cleanedTime = time.replace(/ /g, '');
	return `${year}-${month}-${day} ${cleanedTime}`;
};

export const tanggal = () => {
	const datetime = new Date();
	const year = datetime.getFullYear();
	const month = (datetime.getMonth() + 1).toString().padStart(2, '0');
	const day = datetime.getDate().toString().padStart(2, '0');
	return `${year}-${month}-${day}`;
};

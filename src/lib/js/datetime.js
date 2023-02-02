export function date(tanggal){
	const date = new Date(tanggal)
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options)
	return result
}

export function datetime(tanggal){
	const date = new Date(tanggal)
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const timeoptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' }
	const result = `${date.toLocaleDateString('id-ID', options)} Pukul ${date.toLocaleTimeString('id-ID', timeoptions)}`	
	return result
}

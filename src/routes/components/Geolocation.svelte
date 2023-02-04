<script>
	export let message = '';
	import { onMount } from 'svelte';
	import { getDistance } from 'geolib';

	let userLocation = {};
	let targetLocation = { latitude: 0.7336374, longitude: 124.3083835 };
	let radius = 100;

	const location = () => {
		navigator.geolocation.watchPosition(
			(position) => {
				userLocation = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				};

				let distance = getDistance(userLocation, targetLocation);
				if (distance <= radius) {
					message = 'Anda berada di area PLTD Kotamobagu';
				} else {
					message = 'Anda berada di luar area PLTD Kotamobagu';
				}
			},
			(error) => {
				console.error(error);
			}
		);
	};

	onMount(() => {
		location();
	});
</script>

<h6 class={message === 'Anda berada di area PLTD Kotamobagu' ? 'text-success' : 'text-danger'}>
	{message}
</h6>

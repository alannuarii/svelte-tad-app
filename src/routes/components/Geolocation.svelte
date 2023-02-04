<script>
    export let message = '';
	import { onMount } from 'svelte';
	import { getDistance } from 'geolib';

	let userLocation = {};
	let targetLocation = { latitude: 0.7471202, longitude: 124.3209866 };
	let radius = 10;

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

<h6>{message}</h6>

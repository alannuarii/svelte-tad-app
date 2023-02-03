<script>
	import { tad } from '../lib/js/nama';
	import Webcam from './components/Webcam.svelte';
	import Timer from './components/Timer.svelte';
	import { onMount } from 'svelte';
	import { getDistance } from 'geolib';

	let searchTerm = '';
	let lat = '';
	let lng = '';
	let message = '';
	let distance = '';

	$: filteredData = searchTerm
		? tad.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
		: [];

	async function selectItem(item) {
		searchTerm = item;
		await new Promise((resolve) => setTimeout(resolve, 0));
		filteredData = [];
	}

	function location() {
		navigator.geolocation.getCurrentPosition(function (position) {
			lat = position.coords.latitude;
			lng = position.coords.longitude;
		});
	}

	// Informasi posisi pengguna
	const userLocation = { latitude: lat, longitude: lng };

	// Informasi titik referensi
	const referencePoint = { latitude: 0.7471271, longitude: 124.3209833 };

	// Radius yang ditentukan, dalam meter
	const radius = 1000;

	// Menghitung jarak antara posisi pengguna dan titik referensi
	distance = getDistance(userLocation, referencePoint);

	// Memeriksa apakah jarak berada dalam radius yang ditentukan
	if (distance <= radius) {
		message = 'Pengguna berada dalam radius yang ditentukan';
	} else {
		message = 'Pengguna tidak berada dalam radius yang ditentukan';
	}

	onMount(() => {
		location();
	});
</script>

<section class="container-fluid">
	<div class="text-center">
		<h1>PRESENSI TAD</h1>
		<h5 class="text-dark-emphasis">ULPLTD Kotamobagu</h5>
		<h6>Lokasi:{lat}, {lng}</h6>
		<h6>{distance}</h6>
		<h6>{message}</h6>
	</div>
	<form class="position-relative">
		<div class="timer"><Timer /></div>
		<div class="name position-absolute z-2 w-100">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- <label class="form-label text-dark-emphasis">Nama Tenaga Alih Daya</label>
			<input type="text" class="form-control" placeholder="Masukkan nama"  /> -->
			<div class="form-floating">
				<input
					type="text"
					class="form-control"
					id="floatingInput"
					placeholder="example"
					bind:value={searchTerm}
				/>
				<label for="floatingInput">Nama Tenaga Alih Daya</label>
			</div>

			{#if searchTerm && filteredData.length}
				<ul class="list-group">
					{#each filteredData as item}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li class="list-group-item" on:click={() => selectItem(item)}>{item}</li>
					{/each}
				</ul>
			{/if}
		</div>
		<div class="camera position-absolute z-1 w-100">
			<Webcam />
		</div>
		<div class="submit position-absolute z-1 w-100 d-flex justify-content-center">
			<button class="btn btn-success py-2 px-4" type="submit">Check In</button>
		</div>
	</form>
</section>

<style>
	.container-fluid {
		margin-bottom: 580px;
		border: 1px solid transparent;
	}
	h1 {
		font-weight: 900;
		margin-bottom: 2px;
		color: var(--color-theme-1);
	}
	.timer {
		margin: 35px 0px;
	}
	.camera {
		margin-top: 80px;
	}
	.submit {
		margin-top: 525px;
	}
</style>

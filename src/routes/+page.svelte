<script>
	import Webcam from './components/Webcam.svelte';
	import Timer from './components/Timer.svelte';
	import Bottom from './components/Bottom.svelte';
	import { tad } from '../lib/js/nama';
	import Geolocation from './components/Geolocation.svelte';
	import { onMount } from 'svelte';

	let searchTerm = '';
	let checkMessage = '';

	$: filteredData = searchTerm
		? tad.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
		: [];

	async function selectItem(item) {
		searchTerm = item;
		await new Promise((resolve) => setTimeout(resolve, 0));
		filteredData = [];
	}

	let lat = '';
	let lng = '';
	const location = () => {
		navigator.geolocation.getCurrentPosition(function (position) {
			lat = position.coords.latitude;
			lng = position.coords.longitude;
		});
	};

	onMount(() => {
		location();
	});
</script>

<section class="container-fluid">
	<div class="text-center">
		<h1>PRESENSI TAD</h1>
		<h5 class="text-dark-emphasis">ULPLTD Kotamobagu</h5>
		<Geolocation bind:message={checkMessage} />
		<h6>{lat} | {lng}</h6>
	</div>
	<form class="position-relative" method="POST">
		<div class="timer"><Timer /></div>
		<div class="name position-absolute z-2 w-100">
			<div class="form-floating">
				<input
					type="text"
					class="form-control"
					id="floatingInput"
					placeholder="example"
					name="nama"
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
			<button
				class={checkMessage === 'Anda berada di luar area PLTD Kotamobagu'
					? 'btn btn-secondary py-3 px-5 rounded-pill'
					: 'btn btn-success py-3 px-5 rounded-pill'}
				type="submit"
				disabled={checkMessage === 'Anda berada di luar area PLTD Kotamobagu' ? true : false}
				>Check In</button
			>
		</div>
	</form>
</section>
<Bottom />

<style>
	.container-fluid {
		margin-bottom: 600px;
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
		margin-top: 70px;
	}
	.submit {
		margin-top: 515px;
	}
	button {
		font-size: 18px;
		font-weight: 700;
	}
</style>

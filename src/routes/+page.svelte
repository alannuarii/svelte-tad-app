<script>
	import { tad } from '../lib/js/nama';
	import Webcam from './components/Webcam.svelte';
	import Timer from './components/Timer.svelte';

	let searchTerm = '';

	$: filteredData = searchTerm
		? tad.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
		: [];

	async function selectItem(item) {
		searchTerm = item;
		await new Promise((resolve) => setTimeout(resolve, 0));
		filteredData = [];
	}
</script>

<section class="container-fluid">
	<div class="text-center">
		<h2>PRESENSI TAD</h2>
		<h5 class="text-dark-emphasis">ULPLTD Kotamobagu</h5>
	</div>
	<form class="position-relative">
		<div class="timer"><Timer /></div>
		<div class="name mb-3 position-absolute z-2 w-100">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="form-label">Nama Tenaga Alih Daya</label>
			<input type="text" class="form-control" placeholder="Masukkan nama" bind:value={searchTerm} />

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
		margin-bottom: 590px;
	}
	h2 {
		font-weight: 900;
		margin-bottom: 2px;
		color: var(--color-theme-1);
	}
	.timer {
		margin: 35px 0px;
	}
	.camera {
		margin-top: 90px;
	}
	.submit {
		margin-top: 535px;
	}
</style>

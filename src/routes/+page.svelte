<script>
	import { tad } from '../lib/js/nama';
	import Webcam from './components/Webcam.svelte';

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
	<form>
		<div class="mb-3">
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
		<div>
			<Webcam />
		</div>
	</form>
</section>

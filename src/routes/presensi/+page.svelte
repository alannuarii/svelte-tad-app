<script>
	export let data;
	import { date, getToday } from '../../lib/js/datetime';
	import Bottom from '../components/Bottom.svelte';

	let today = getToday()

	const presensi = data.data;
</script>

<section class="container-fluid mb-5">
	<div class="text-center">
		<h1>PRESENSI TAD</h1>
		<h3 class="text-dark-emphasis">ULPLTD Kotamobagu</h3>
		<h4 class="my-3 text-dark-emphasis p-3 bg-body-secondary">
			<i class="bi-calendar3 me-2" />
			{date(today)}
		</h4>
	</div>
	<div class="row row-cols-2 gy-3 m-1">
		{#each presensi as pre}
			<div class="col">
				<img
					class="img-fluid"
					src="https://pltdktm.anpy.my.id/static/uploads/presensi/{pre.foto}"
					alt=""
				/>
				<div class="text-center name-time bg-dark-subtle py-2">
					<h5>{pre.nama}</h5>
					<h6>{pre.waktu}</h6>
				</div>
			</div>
		{/each}
	</div>
</section>
<Bottom />

<style>
	h1 {
		font-weight: 900;
		margin-bottom: 2px;
		color: var(--color-theme-1);
	}
	h3 {
		font-size: 20px;
		margin-top: -3px;
	}
	h4 {
		font-size: 18px;
	}
	h5 {
		font-size: 11px;
		margin-bottom: 0px;
		font-weight: 800;
	}
	h6 {
		font-size: 11px;
		margin-bottom: -2px;
	}
	img {
		border-radius: 20px 20px 0px 0px;
	}
	.name-time {
		border-radius: 0px 0px 30px 0px;
		border-bottom: 5px solid var(--color-theme-1);
	}
</style>

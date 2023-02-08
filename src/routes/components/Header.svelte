<script>
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
	$: console.log(path);
</script>

<nav class="navbar">
	<div class="container-fluid">
		{#if path !== '/'}
			<a class="navbar-brand flex-grow-1 ms-2" href="/">
				<i class="bi-arrow-left me-2" />
			</a>
		{:else}
			<a class="navbar-brand flex-grow-1 ms-2" href="/">
				<h5>T A D</h5>
			</a>
		{/if}
	</div>
</nav>

<style>
	.navbar {
		height: 65px;
		background-color: var(--color-theme-1);
		border-radius: 0 0 70px 0;
		border-bottom: 10px solid var(--color-theme-2);
	}
	.navbar i {
		color: var(--color-text-1);
		font-size: 25px;
	}
	.navbar h5 {
		margin-bottom: -2px;
		font-size: 23px;
		font-weight: 900;
		font-family: 'Poppins', sans-serif;
		color: var(--color-text-1);
	}
</style>

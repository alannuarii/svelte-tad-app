<script>
	import '../lib/css/styles.css';
	import Header from './components/Header.svelte';

</script>

<div id="master" class="bg-light">
	<Header />
	<main class="py-3">
		<slot />
	</main>

</div>

<style>
	#master {
		overflow-x: hidden;
		height: 100vh;
	}
</style>

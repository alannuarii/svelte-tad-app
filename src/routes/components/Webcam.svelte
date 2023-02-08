<script>
	import { onMount, onDestroy } from 'svelte';
	let mediaStream;
	let videoEl;
	let resetBtn = false;
	let takeSnapshotBtn = true;
	let isCanvasOn = false;
	export let hiddenInput = '';

	async function getWebcam() {
		mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
		videoEl.srcObject = mediaStream;
		videoEl.play();
		takeSnapshotBtn = true;
	}

	function takeSnapshot() {
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
		const imgUrl = canvas.toDataURL();
		hiddenInput = imgUrl;
		isCanvasOn = false;
		stopWebcam();
	}

	function stopWebcam() {
		const tracks = mediaStream.getTracks();
		tracks.forEach((track) => track.stop());
		videoEl.srcObject = null;
		resetBtn = true;
		takeSnapshotBtn = false;
	}

	function resetSnapshot() {
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// hiddenInput.value = '';
		getWebcam();
		takeSnapshotBtn = true;
		isCanvasOn = true;
		resetBtn = false;
	}

	onMount(() => {
		getWebcam();
	});

	// onDestroy(() => {
	// 	stopWebcam();
	// });
</script>

<div class="d-flex flex-column align-items-center border p-3 rounded-2">
	<div class="position-relative foto-border">
		<!-- svelte-ignore a11y-media-has-caption -->
		<video bind:this={videoEl} />
		<canvas
			class:d-none={isCanvasOn}
			width="240"
			height="320"
			class="position-absolute top-50 start-50 translate-middle"
		/>
		<input type="hidden" name="foto" bind:this={hiddenInput} />
		<!-- svelte-ignore a11y-missing-attribute -->
	</div>
	<div class="box position-relative">
		<button
			class="btn snapshot position-absolute top-50 start-50 translate-middle"
			disabled={!takeSnapshotBtn}
			on:click={takeSnapshot}><i class="bi-circle-fill text-danger" /></button
		>
		<button class="btn reset px-3 py-1" disabled={!resetBtn} on:click={resetSnapshot}>Reset</button>
	</div>
</div>

<style>
	video,
	canvas {
		width: 100%;
	}
	.foto-border {
		height: 320px;
		width: 240px;
	}
	.box {
		height: 70px;
		width: 70px;
	}
	.btn {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.bi-circle-fill {
		font-size: 50px;
		cursor: pointer;
	}
	.snapshot {
		z-index: 99;
	}
	.reset {
		position: absolute;
		left: 140%;
		top: 50%;
		transform: translate(-50%, -50%);
		border: 1px solid var(--color-text-1);
		border-radius: 20px 10px 10px 20px;
	}
</style>

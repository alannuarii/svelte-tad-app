<script>
	export let message;
	let show = true;
	let progress = 0;

	setTimeout(() => {
		show = false;
	}, 6500);

	setInterval(() => {
		progress += 0.2;
	}, 10);
</script>

<div class={show ? '' : 'd-none'}>
	<div
		class="alert alert-danger position-absolute top-0 start-50 translate-middle-x rounded-4"
		role="alert"
	>
		<i class="bi-exclamation-triangle-fill me-2" />{message}
		<div
			class="progress mt-2"
			role="progressbar"
			aria-label="Example 1px high"
			aria-valuenow="25"
			aria-valuemin="0"
			aria-valuemax="100"
			style="height: 3px"
		>
			<div class="progress-bar bg-secondary" style="width: {progress}%" />
		</div>
	</div>
</div>

<style>
	.alert {
		width: 100%;
		border-color: transparent;
		font-size: larger;
	}
</style>

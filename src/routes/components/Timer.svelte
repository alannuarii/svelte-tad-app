<script>
	import { date, waktu, getToday } from '../../lib/js/datetime';

	let time = '00:00:00';
	let today = getToday()

	setInterval(() => {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();

		hours = (hours < 10 ? '0' : '') + hours;
		minutes = (minutes < 10 ? '0' : '') + minutes;
		seconds = (seconds < 10 ? '0' : '') + seconds;

		time = `${hours} : ${minutes} : ${seconds}`;
	}, 1000);
</script>

<div class="text-center">
	<h5 class="mb-4 text-dark-emphasis">{date(today)}</h5>
	<span class="px-4 py-3 text-center rounded-4 bg-success-subtle text-success"
		><i class="bi-clock me-1" /> {time}</span
	>
	<input type="hidden" name="waktu" value={waktu(time)} />
</div>

<style>
	span {
		text-align: center;
		margin-bottom: -2px;
		font-size: 28px;
		font-weight: 600;
	}
</style>

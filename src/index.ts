import './sass/index.sass';

const buttons = document.querySelectorAll('button');
const sounds = document.querySelectorAll('audio');
const volume = document.querySelector('.volume') as HTMLInputElement;

buttons.forEach((btn) => {
	btn.addEventListener('click', ({ currentTarget }) => {
		buttons.forEach((b) => {
			if (b !== currentTarget) b.classList.remove('pause');
		});

		document.body.className = '';

		(currentTarget as HTMLElement).classList.toggle('pause');

		const buttonClassName = (currentTarget as HTMLElement).className;

		if (!buttonClassName.includes('sun')) {
			document.body.classList.add(
				`${buttonClassName.includes('rain') ? 'rainy' : 'winter'}`
			);
		}

		sounds.forEach((sound) => {
			sound.pause();

			if (buttonClassName.includes(sound.id)) {
				sound.classList.toggle('play');
				if (sound.classList.contains('play')) {
					sound.play();
				}
			} else {
				sound.className = '';
			}
		});
	});
});

volume.addEventListener('input', () => {
	sounds.forEach((sound) => (sound.volume = +volume.value));
});

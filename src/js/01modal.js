if (document.getElementById('btnModal')) {
	btn.onclick = function () {
		modal.style.display = 'block';

		body.style.position = 'static';
		body.style.height = '100%';
		body.style.overflow = 'hidden';
	};

	span.onclick = function () {
		modal.style.display = 'none';

		body.style.position = 'inherit';
		body.style.height = 'auto';
		body.style.overflow = 'visible';
	};

	window.onclick = function (event) {
		event.preventDefault();
		if (event.target == modal) {
			modal.style.display = 'none';

			body.style.position = 'inherit';
			body.style.height = 'auto';
			body.style.overflow = 'visible';
		}
	};
}

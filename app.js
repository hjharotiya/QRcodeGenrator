const inputEl = document.querySelector(".input-box");
const input = document.getElementById("QRinput");
const qrcontainer = document.querySelector(".QR-container");
const qrimage = document.querySelector("#qrimage");
const btn = document.querySelector(".btn");


inputEl.addEventListener("submit", (e) => {
	e.preventDefault();

	const genrateQRcode = (url) => {
		if (!url) return;
		
		btn.textContent = "genrating QR code...";
		qrimage.src = url;

		const imageLoad = () => {
			const interval = setInterval(() => {
				qrcontainer.classList.add("show");
				clearInterval(interval);
				
				btn.textContent = "genrate QR code";
			},400)
			
		}
			
		qrimage.addEventListener("load",imageLoad)

	}


	const inputvalue = input.value;

	const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;

	genrateQRcode(URL);
});
input.addEventListener("keyup", () => {
	if (!input.value.trim()) {
		qrcontainer.classList.remove("show");
	}
})
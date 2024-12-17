window.onload = function () {
	let f = document.getElementById("fav");
	let c = document.createElement("CANVAS", {alpha: false});
	let ctx = c.getContext("2d");
	const pal = [
		"#125359",
		"#008751",
		"#00B543",
		"#00E436",
		"#A8E72E",
		"#F3EF7D"
	];
	let s = 16;
	c.width = s;
	c.height = s;
	function pset(x, y, col) {
		ctx.strokeStyle = "" + col;
		ctx.moveTo(x, y);
		ctx.lineTo(x + 1, y + 1);
		ctx.stroke()
	}
	function draw() {
		let t = new Date().getSeconds();
		for (let x = 0; x < s; x += 1) {
			for (let y = 0; y < s; y += 1) {
				let k = (Math.sin(x / 80) * Math.sin(y / 80) + t / 4) % 6;
				pset(x, y, pal[Math.floor(k)])
			}
		}
		f.setAttribute("href", c.toDataURL());
		console.log("bah")
	}
	if (window.screen.height > 500 && window.screen.width > 500) { //setInterval(draw,2000)
	}
};
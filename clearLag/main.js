function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), ms);
	});
}

async function creatMob() {
	for (let i = 0; i < 10; i++) {
		const reponse = await fetch(`http://192.168.1.15:3000/v1/arena/entities`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				entityId: 8,
				x: -5,
				z: -6,
			}),
		});
		const data = await reponse.json();

		console.log(data);

		await delay(10);
		
	}
}

async function deleteAll() {
	const resGet = await fetch("http://192.168.1.15:3000/v1/arena/entities");

	const data = await resGet.json();

	for (const entity of data) {
		await fetch(`http://192.168.1.15:3000/v1/arena/entities/${entity.id}`, {
			method: "DELETE",
		});
	}
}

creatMob();

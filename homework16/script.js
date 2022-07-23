let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(nameFile) {
    let heroes = this.map(
        function(heroInfo){
            let nameToLoverCase = heroInfo.name.replaceAll(""," ").toLowerCase();
            return `
            <tr>
				<td>${heroInfo.name}</td>
				<td>
					<img class = "hero-img" src="images/${nameFile}/${nameToLoverCase}.svg">
				</td>
			</tr>`;
        }
    )
    .join("");

    document.write(`
    table class = "hero-table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Icon</th>
			</tr>
		</thead>
		<tbody>
			${heroes}
		</tbody>
	</table>`);
}

dcHeroes.heroesRender('dc');
marvelHeroes.heroesRender('marvel');
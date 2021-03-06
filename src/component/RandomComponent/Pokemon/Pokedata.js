const pokeData = [
	{
		id: 1,
		name: 'BULBASAUR',
		src: 'https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.webp',
		type: 'Grass',
		Power: 114,
	},
	{
		id: 2,
		name: 'IVYSAUR',
		src: 'https://www.pngkey.com/png/full/168-1685696_ivysaur-pokemon-ivysaur.png',
		type: 'Grass',
		Power: 113,
	},
	{
		id: 3,
		name: 'VENUSAUR',
		src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
		type: 'Grass',
		Power: 102,
	},
	{
		id: 4,
		name: 'CHARMANDER',
		src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
		type: 'Fire',
		Power: 123,
	},
	{
		id: 5,
		name: 'CHARMELEON',
		src: 'https://static.pokemonpets.com/images/monsters-images-300-300/5-Charmeleon.webp',
		type: 'Fire',
		Power: 120,
	},
	{
		id: 6,
		name: 'CHARIZARD',
		src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
		type: 'Fire',
		Power: 125,
	},
	{
		id: 7,
		name: 'SQUIRTLE',
		src: 'https://pngimg.com/uploads/pokemon/pokemon_PNG116.png',
		type: 'Normal',
		Power: 122,
	},
	{
		id: 8,
		name: 'WARTORTLE',
		src: 'https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/wartortle.png',
		type: 'Water',
		Power: 115,
	},
	{
		id: 9,
		name: 'BLASTOISE',
		src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
		type: 'Water',
		Power: 116,
	},
	{
		id: 10,
		name: 'CATERPIE',
		src: 'https://static.pokemonpets.com/images/monsters-images-300-300/10-Caterpie.webp',
		type: 'Flying',
		Power: 112,
	},
	{
		id: 11,
		name: 'METAPOD',
		src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
		type: 'Bug',
		Power: 101,
	},
	{
		id: 12,
		name: 'BUTTERFREE',
		src: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_843/MTc2MjY3MzkwMDI2NDU4MzAy/pokemon-butterfree-nicknames.webp',
		type: 'Bug',
		Power: 100,
	},
	{
		id: 13,
		name: 'WEEDLE',
		src: 'https://d.newsweek.com/en/full/1601659/pokemon-go-weedle-community-day-event.jpg?w=1600&h=1600&q=88&f=312ac9465cad5cc8a60a3116b403e439',
		type: 'Poison',
		Power: 104,
	},
	{
		id: 14,
		name: 'KAKUNA',
		src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
		type: 'Poison',
		Power: 115,
	},
	{
		id: 15,
		name: 'BEEDRILL',
		src: 'https://img.pokemondb.net/artwork/large/beedrill.jpg',
		type: 'Bug',
		Power: 108,
	},
	{
		id: 16,
		name: 'PIDGEY',
		src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
		type: 'Flying',
		Power: 109,
	},
	{
		id: 17,
		name: 'PIDGEOTTO',
		src: 'https://i.pinimg.com/originals/96/d7/14/96d7143a2b7f2770060dbbabc8bb2c8c.jpg',
		type: 'Flying',
		Power: 112,
	},
	{
		id: 18,
		name: 'PIDGEOT',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYnRrOUsTnNIzDPq51dSFKCzFR8b0dyrbvotNgqYNNpkxTpSA41sCYN7lXofqCl1lJs&usqp=CAU',
		type: 'Flying',
		Power: 111,
	},
	{
		id: 19,
		name: 'RATTATA',
		src: 'data:image/jpeg;base64,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',
		type: 'Normal',
		Power: 113,
	},
	{
		id: 20,
		name: 'RATICATE',
		src: 'https://www.clipartmax.com/png/middle/207-2073625_shiny-raticate-pok%C3%A9dex-pokemon-raticate.png',
		type: 'Normal',
		Power: 117,
	},
	{
		id: 21,
		name: 'SPEAROW',
		src: 'https://i.pinimg.com/originals/aa/03/55/aa0355eb79300fbc36865f55db978b6f.png',
		type: 'Flying',
		Power: 120,
	},
	{
		id: 22,
		name: 'FEAROW',
		src: 'https://static.pokemonpets.com/images/monsters-images-800-800/8022-Mega-Fearow.webp',
		type: 'Flying',
		Power: 121,
	},
	{
		id: 23,
		name: 'EKANS',
		src: 'data:image/jpeg;base64,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',
		type: 'Poison',
		Power: 103,
	},
	{
		id: 24,
		name: 'ARBOK',
		src: 'https://www.kindpng.com/picc/m/776-7769248_shiny-arbok-pokdex-pokemon-arbok-png-transparent-png.png',
		type: 'Poison',
		Power: 121,
	},
	{
		id: 25,
		name: 'PIKACHU',
		src: 'https://pngimg.com/uploads/pokemon/pokemon_PNG100.png',
		type: 'Electric',
		Power: 124,
	},
];
export default pokeData;

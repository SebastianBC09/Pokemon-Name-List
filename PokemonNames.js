//Solucion para prueba logica # 2 Pokemon Names

const pokemonNames = [
  'audino',
  'bagon',
  'baltoy',
  'banette',
  'bidoof',
  'braviary',
  'bronzor',
  'carracosta',
  'charmeleon',
  'cresselia',
  'croagunk',
  'darmanitan',
  'deino',
  'emboar',
  'emolga',
  'exeggcute',
  'gabite',
  'girafarig',
  'gulpin',
  'haxorus',
  'heatmor',
  'heatran',
  'ivysaur',
  'jellicent',
  'jumpluff',
  'kangaskhan',
  'kricketune',
  'landorus',
  'ledyba',
  'loudred',
  'lumineon',
  'lunatone',
  'machamp',
  'magnezone',
  'mamoswine',
  'nosepass',
  'petilil',
  'pidgeotto',
  'pikachu',
  'pinsir',
  'poliwrath',
  'poochyena',
  'porygon2',
  'porygonz',
  'registeel',
  'relicanth',
  'remoraid',
  'rufflet',
  'sableye',
  'scolipede',
  'scrafty',
  'seaking',
  'sealeo',
  'silcoon',
  'simisear',
  'snivy',
  'snorlax',
  'spoink',
  'starly',
  'tirtouga',
  'trapinch',
  'treecko',
  'tyrogue',
  'vigoroth',
  'vulpix',
  'wailord',
  'wartortle',
  'whismur',
  'wingull',
  'yamask',
]

function PokemonNamesSequence() {
  pokemonNames.reverse()
  let currentPokemonName = pokemonNames[0];
  let followingPokemonName = '';
  let finalLetterOfCurrentPokemonName = '';
  const highestPossiblePokemonNameList = []

  highestPossiblePokemonNameList.push(currentPokemonName)

  for (i = 1; i < pokemonNames.length; i++) {
    followingPokemonName = pokemonNames[i];
    finalLetterOfCurrentPokemonName = currentPokemonName.charAt(currentPokemonName.length - 1);

    if (followingPokemonName.charAt(0) === finalLetterOfCurrentPokemonName) {
      console.log('La letra final actual es: ' + finalLetterOfCurrentPokemonName);
      console.log('La primera letra del siguente nombre es : ' + followingPokemonName.charAt(0));

      highestPossiblePokemonNameList.push(followingPokemonName)
      currentPokemonName = followingPokemonName;

      console.log('En el momento van añadidos ' + highestPossiblePokemonNameList.length + ' nombres de Pokemon que cumplen con la condicion\n');
    } else {
      //Do nothing
    }
  }

  console.log('La lista más larga de nombres subsecuentes de Pokemon que empiecen por la última letra del nombre anterior es: ' + highestPossiblePokemonNameList.length)
  console.log('La lista es la siguiente: ' + highestPossiblePokemonNameList)
}

PokemonNamesSequence();




import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HeroesService {
  private router: Router;
  private pokemon: any = [{
      "pokemon": {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "spearow",
        "url": "https://pokeapi.co/api/v2/pokemon/21/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "fearow",
        "url": "https://pokeapi.co/api/v2/pokemon/22/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "zubat",
        "url": "https://pokeapi.co/api/v2/pokemon/41/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "golbat",
        "url": "https://pokeapi.co/api/v2/pokemon/42/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "farfetchd",
        "url": "https://pokeapi.co/api/v2/pokemon/83/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "doduo",
        "url": "https://pokeapi.co/api/v2/pokemon/84/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "dodrio",
        "url": "https://pokeapi.co/api/v2/pokemon/85/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "scyther",
        "url": "https://pokeapi.co/api/v2/pokemon/123/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "gyarados",
        "url": "https://pokeapi.co/api/v2/pokemon/130/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "aerodactyl",
        "url": "https://pokeapi.co/api/v2/pokemon/142/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "articuno",
        "url": "https://pokeapi.co/api/v2/pokemon/144/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "zapdos",
        "url": "https://pokeapi.co/api/v2/pokemon/145/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "moltres",
        "url": "https://pokeapi.co/api/v2/pokemon/146/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "dragonite",
        "url": "https://pokeapi.co/api/v2/pokemon/149/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "hoothoot",
        "url": "https://pokeapi.co/api/v2/pokemon/163/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "noctowl",
        "url": "https://pokeapi.co/api/v2/pokemon/164/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "ledyba",
        "url": "https://pokeapi.co/api/v2/pokemon/165/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "ledian",
        "url": "https://pokeapi.co/api/v2/pokemon/166/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "crobat",
        "url": "https://pokeapi.co/api/v2/pokemon/169/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "togetic",
        "url": "https://pokeapi.co/api/v2/pokemon/176/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "natu",
        "url": "https://pokeapi.co/api/v2/pokemon/177/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "xatu",
        "url": "https://pokeapi.co/api/v2/pokemon/178/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "hoppip",
        "url": "https://pokeapi.co/api/v2/pokemon/187/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "skiploom",
        "url": "https://pokeapi.co/api/v2/pokemon/188/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "jumpluff",
        "url": "https://pokeapi.co/api/v2/pokemon/189/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "yanma",
        "url": "https://pokeapi.co/api/v2/pokemon/193/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "murkrow",
        "url": "https://pokeapi.co/api/v2/pokemon/198/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "gligar",
        "url": "https://pokeapi.co/api/v2/pokemon/207/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "delibird",
        "url": "https://pokeapi.co/api/v2/pokemon/225/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "mantine",
        "url": "https://pokeapi.co/api/v2/pokemon/226/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "skarmory",
        "url": "https://pokeapi.co/api/v2/pokemon/227/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "lugia",
        "url": "https://pokeapi.co/api/v2/pokemon/249/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "ho-oh",
        "url": "https://pokeapi.co/api/v2/pokemon/250/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "beautifly",
        "url": "https://pokeapi.co/api/v2/pokemon/267/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "taillow",
        "url": "https://pokeapi.co/api/v2/pokemon/276/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "swellow",
        "url": "https://pokeapi.co/api/v2/pokemon/277/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "wingull",
        "url": "https://pokeapi.co/api/v2/pokemon/278/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "pelipper",
        "url": "https://pokeapi.co/api/v2/pokemon/279/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "masquerain",
        "url": "https://pokeapi.co/api/v2/pokemon/284/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "ninjask",
        "url": "https://pokeapi.co/api/v2/pokemon/291/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "swablu",
        "url": "https://pokeapi.co/api/v2/pokemon/333/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "altaria",
        "url": "https://pokeapi.co/api/v2/pokemon/334/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "tropius",
        "url": "https://pokeapi.co/api/v2/pokemon/357/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "salamence",
        "url": "https://pokeapi.co/api/v2/pokemon/373/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "rayquaza",
        "url": "https://pokeapi.co/api/v2/pokemon/384/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "starly",
        "url": "https://pokeapi.co/api/v2/pokemon/396/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "staravia",
        "url": "https://pokeapi.co/api/v2/pokemon/397/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "staraptor",
        "url": "https://pokeapi.co/api/v2/pokemon/398/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "mothim",
        "url": "https://pokeapi.co/api/v2/pokemon/414/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "combee",
        "url": "https://pokeapi.co/api/v2/pokemon/415/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "vespiquen",
        "url": "https://pokeapi.co/api/v2/pokemon/416/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "drifloon",
        "url": "https://pokeapi.co/api/v2/pokemon/425/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "drifblim",
        "url": "https://pokeapi.co/api/v2/pokemon/426/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "honchkrow",
        "url": "https://pokeapi.co/api/v2/pokemon/430/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "chatot",
        "url": "https://pokeapi.co/api/v2/pokemon/441/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "mantyke",
        "url": "https://pokeapi.co/api/v2/pokemon/458/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "togekiss",
        "url": "https://pokeapi.co/api/v2/pokemon/468/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "yanmega",
        "url": "https://pokeapi.co/api/v2/pokemon/469/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "gliscor",
        "url": "https://pokeapi.co/api/v2/pokemon/472/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "pidove",
        "url": "https://pokeapi.co/api/v2/pokemon/519/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "tranquill",
        "url": "https://pokeapi.co/api/v2/pokemon/520/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "unfezant",
        "url": "https://pokeapi.co/api/v2/pokemon/521/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "woobat",
        "url": "https://pokeapi.co/api/v2/pokemon/527/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "swoobat",
        "url": "https://pokeapi.co/api/v2/pokemon/528/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "sigilyph",
        "url": "https://pokeapi.co/api/v2/pokemon/561/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "archen",
        "url": "https://pokeapi.co/api/v2/pokemon/566/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "archeops",
        "url": "https://pokeapi.co/api/v2/pokemon/567/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "ducklett",
        "url": "https://pokeapi.co/api/v2/pokemon/580/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "swanna",
        "url": "https://pokeapi.co/api/v2/pokemon/581/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "emolga",
        "url": "https://pokeapi.co/api/v2/pokemon/587/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "rufflet",
        "url": "https://pokeapi.co/api/v2/pokemon/627/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "braviary",
        "url": "https://pokeapi.co/api/v2/pokemon/628/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "vullaby",
        "url": "https://pokeapi.co/api/v2/pokemon/629/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "mandibuzz",
        "url": "https://pokeapi.co/api/v2/pokemon/630/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "tornadus-incarnate",
        "url": "https://pokeapi.co/api/v2/pokemon/641/"
      },
      "slot": 1
    },
    {
      "pokemon": {
        "name": "thundurus-incarnate",
        "url": "https://pokeapi.co/api/v2/pokemon/642/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "landorus-incarnate",
        "url": "https://pokeapi.co/api/v2/pokemon/645/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "fletchling",
        "url": "https://pokeapi.co/api/v2/pokemon/661/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "fletchinder",
        "url": "https://pokeapi.co/api/v2/pokemon/662/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "talonflame",
        "url": "https://pokeapi.co/api/v2/pokemon/663/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "vivillon",
        "url": "https://pokeapi.co/api/v2/pokemon/666/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "hawlucha",
        "url": "https://pokeapi.co/api/v2/pokemon/701/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "noibat",
        "url": "https://pokeapi.co/api/v2/pokemon/714/"
      },
      "slot": 1
    },
    {
      "pokemon": {
        "name": "noivern",
        "url": "https://pokeapi.co/api/v2/pokemon/715/"
      },
      "slot": 1
    },
    {
      "pokemon": {
        "name": "yveltal",
        "url": "https://pokeapi.co/api/v2/pokemon/717/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "rowlet",
        "url": "https://pokeapi.co/api/v2/pokemon/722/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "dartrix",
        "url": "https://pokeapi.co/api/v2/pokemon/723/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "pikipek",
        "url": "https://pokeapi.co/api/v2/pokemon/731/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "trumbeak",
        "url": "https://pokeapi.co/api/v2/pokemon/732/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "toucannon",
        "url": "https://pokeapi.co/api/v2/pokemon/733/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "oricorio-baile",
        "url": "https://pokeapi.co/api/v2/pokemon/741/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-red-meteor",
        "url": "https://pokeapi.co/api/v2/pokemon/774/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "celesteela",
        "url": "https://pokeapi.co/api/v2/pokemon/797/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "shaymin-sky",
        "url": "https://pokeapi.co/api/v2/pokemon/10006/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "rotom-fan",
        "url": "https://pokeapi.co/api/v2/pokemon/10011/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "tornadus-therian",
        "url": "https://pokeapi.co/api/v2/pokemon/10019/"
      },
      "slot": 1
    },
    {
      "pokemon": {
        "name": "thundurus-therian",
        "url": "https://pokeapi.co/api/v2/pokemon/10020/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "landorus-therian",
        "url": "https://pokeapi.co/api/v2/pokemon/10021/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "charizard-mega-y",
        "url": "https://pokeapi.co/api/v2/pokemon/10035/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "pinsir-mega",
        "url": "https://pokeapi.co/api/v2/pokemon/10040/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "aerodactyl-mega",
        "url": "https://pokeapi.co/api/v2/pokemon/10042/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "pidgeot-mega",
        "url": "https://pokeapi.co/api/v2/pokemon/10073/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "rayquaza-mega",
        "url": "https://pokeapi.co/api/v2/pokemon/10079/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "salamence-mega",
        "url": "https://pokeapi.co/api/v2/pokemon/10089/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "oricorio-pom-pom",
        "url": "https://pokeapi.co/api/v2/pokemon/10123/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "oricorio-pau",
        "url": "https://pokeapi.co/api/v2/pokemon/10124/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "oricorio-sensu",
        "url": "https://pokeapi.co/api/v2/pokemon/10125/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-orange-meteor",
        "url": "https://pokeapi.co/api/v2/pokemon/10130/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-yellow-meteor",
        "url": "https://pokeapi.co/api/v2/pokemon/10131/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-green-meteor",
        "url": "https://pokeapi.co/api/v2/pokemon/10132/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-blue-meteor",
        "url": "https://pokeapi.co/api/v2/pokemon/10133/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-indigo-meteor",
        "url": "https://pokeapi.co/api/v2/pokemon/10134/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-violet-meteor",
        "url": "https://pokeapi.co/api/v2/pokemon/10135/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-red",
        "url": "https://pokeapi.co/api/v2/pokemon/10136/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-orange",
        "url": "https://pokeapi.co/api/v2/pokemon/10137/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-yellow",
        "url": "https://pokeapi.co/api/v2/pokemon/10138/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-green",
        "url": "https://pokeapi.co/api/v2/pokemon/10139/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-blue",
        "url": "https://pokeapi.co/api/v2/pokemon/10140/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-indigo",
        "url": "https://pokeapi.co/api/v2/pokemon/10141/"
      },
      "slot": 2
    },
    {
      "pokemon": {
        "name": "minior-violet",
        "url": "https://pokeapi.co/api/v2/pokemon/10142/"
      },
      "slot": 2
    }]
  private heroes: any[] = [
      {
        nombre: "Aquaman",
        bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
        img: "assets/img/aquaman.png",
        aparicion: "1941-11-01",
        casa: "DC"
      },
      {
        nombre: "Batman",
        bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
        img: "assets/img/batman.png",
        aparicion: "1939-05-01",
        casa: "DC"
      },
      {
        nombre: "Daredevil",
        bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
        img: "assets/img/daredevil.png",
        aparicion: "1964-01-01",
        casa: "Marvel"
      },
      {
        nombre: "Hulk",
        bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
        img: "assets/img/hulk.png",
        aparicion: "1962-05-01",
        casa: "Marvel"
      },
      {
        nombre: "Linterna Verde",
        bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
        img: "assets/img/linterna-verde.png",
        aparicion: "1940-06-01",
        casa: "DC"
      },
      {
        nombre: "Spider-Man",
        bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
        img: "assets/img/spiderman.png",
        aparicion: "1962-08-01",
        casa: "Marvel"
      },
      {
        nombre: "Wolverine",
        bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
        img: "assets/img/wolverine.png",
        aparicion: "1974-11-01",
        casa: "Marvel"
      }
    ];

  constructor() {
  }

  getHeroes() {
    return this.heroes;
  }

  getpokemones() {
    return this.pokemon;
  }

  getHeroeByIndex(idx:string) {
    return this.heroes[idx];
  }

  buscarHeroes(termino: string) {
    let heroesArr: any = [];
    termino = termino.toLowerCase();
    for (let heroe of this.heroes) {
      let nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
    //return heroesArr;   
  }
}

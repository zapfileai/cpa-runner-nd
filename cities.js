const northDakotaCities = [
  "Amenia", "Aneta", "Arthur", "Beach", "Belfield",
  "Beulah", "Bismarck", "Bottineau", "Bowbells", "Bowman",
  "Burlington", "Cando", "Carrington", "Carson", "Cavalier",
  "Cooperstown", "Crosby", "Devils Lake", "Dickinson", "Douglas",
  "Drayton", "Elgin", "Emerado", "Fargo", "Garrison",
  "Grafton", "Grand Forks", "Grandin", "Gwinner", "Hannaford",
  "Harvey", "Hazelton", "Horace", "Jamestown", "Kathryn",
  "Kenmare", "Lamoure", "Langdon", "Leeds", "Linton",
  "Lisbon", "Maddock", "Mandan", "Mcclusky", "Mcville",
  "Medora", "Minot", "Mohall", "Napoleon", "New Town",
  "Northwood", "Oakes", "Park River", "Parshall", "Ray",
  "Rolla", "Rugby", "Stanley", "Sykeston", "Underwood",
  "Valley City", "Velva", "Verona", "Wahpeton", "Walcott",
  "Washburn", "Watford City", "West Fargo", "Wheatland", "Williston",
  "Wilton", "Zap",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < northDakotaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(northDakotaCities[i]);
}

module.exports = { batches };

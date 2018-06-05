const { pastPairs, mostRecentPairs } = require('./pastPairs');

const fellows = [
  'Nick',
  'Don',
  'Alexa',
  'Marshall',
  'Yoni',
  'Ben',
  'Rocky',
  'Jeff',
];

let mutableFellowsList = Array.prototype.slice.call(fellows);
const newPairs = new Map();

while (mutableFellowsList.length) {
  // create new pairs
  const fellow1 = mutableFellowsList.shift();
  while (
    pastPairs[fellow1].has(mutableFellowsList[0]) ||
    (
      mostRecentPairs.has(mutableFellowsList[0]) && mostRecentPairs.has(fellow1)
    )
  ) {
    mutableFellowsList = shuffle(mutableFellowsList);
  }
  const fellow2 = mutableFellowsList.shift();

  // set roles (interviewer/interviewee) for new pairs
  if (mostRecentPairs.has(fellow1)) newPairs.set(fellow2, fellow1);
  else newPairs.set(fellow1, fellow2);

  // set data
  pastPairs[fellow1].add(fellow2);
  pastPairs[fellow2].add(fellow1);
}

// reset most recent pairs
mostRecentPairs.clear();
for (const pair of newPairs) mostRecentPairs.set(...pair);

console.log('new pairs: ', newPairs);


/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
// courtesy: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

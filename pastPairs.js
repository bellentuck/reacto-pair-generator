module.exports = {
  pastPairs: {
    Nick: new Set(['Don']),
    Don: new Set(['Nick']),
    Alexa: new Set(['Marshall']),
    Marshall: new Set(['Alexa']),
    Yoni: new Set(['Ben']),
    Ben: new Set(['Yoni']),
    Rocky: new Set(['Jeff']),
    Jeff: new Set(['Rocky']),
  },
  mostRecentPairs: new Map([
    ['Nick', 'Don'],
    ['Alexa', 'Marshall'],
    ['Yoni', 'Ben'],
    ['Rocky', 'Jeff'],
  ]), // keys = interviewers, vals = interviewees.
};

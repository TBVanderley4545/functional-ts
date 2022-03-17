import {
  curriedQuote,
  quoteCrockford,
  quoteDijkstra,
  quoteDijkstra75,
} from './quotes';
import { writeBusinessMemo, writeLoveLetter } from './salutations';

console.log(
  writeBusinessMemo('Hi, Peter. We need to talk about your TPS reports.', 'Bob')
);

console.log(
  writeLoveLetter(
    "Shall I compare thee to a summer's day? Thou art more lovely and more temperate."
  )
);

console.log(
  curriedQuote('Guido van Rossum')(2001)(
    "Don't you hate code that's not properly indented?"
  )
);

console.log(
  quoteCrockford(2005)('There are no good texts on JavaScript programming.')
);

console.log(
  quoteCrockford(2008)(
    'JavaScript is an astonishing language, in the very worst sense.'
  )
);

console.log(
  quoteDijkstra(1978)(
    'Object oriented programming is an exceptionally bad idea which could only have originated in California.'
  )
);

console.log(
  quoteDijkstra75(
    'By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.'
  )
);

console.log(
  quoteDijkstra75(
    "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer."
  )
);

console.log(
  quoteDijkstra75(
    "The irony of my self-contradiction is lost on me. [Just kidding, he didn't actually say this one - making it all the more true!]"
  )
);

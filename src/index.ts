
/* IMPORT */

import {USE_BUFFER} from './constants';
import Browser from './browser';
import Node from './node';

/* MAIN */

const Radix64 = USE_BUFFER ? Node : Browser;

/* EXPORT */

export default Radix64;

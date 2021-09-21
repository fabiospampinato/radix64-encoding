
/* MAIN */

const ALPHABET_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split ( '' );
const ALPHABET_CODES = ALPHABET_CHARS.map ( char => char.charCodeAt ( 0 ) );

const MASK1 = 0b11111100_00000000_00000000;
const MASK2 = 0b00000011_11110000_00000000;
const MASK3 = 0b00000000_00001111_11000000;
const MASK4 = 0b00000000_00000000_00111111;

const USE_BUFFER = ( typeof process === 'object' && typeof Buffer === 'function' && typeof Buffer.from === 'function' );

/* EXPORT */

export {ALPHABET_CHARS, ALPHABET_CODES, MASK1, MASK2, MASK3, MASK4, USE_BUFFER};

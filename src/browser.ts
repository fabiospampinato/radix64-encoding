
/* IMPORT */

import U8 from 'uint8-encoding';
import {ALPHABET_CODES, MASK1, MASK2, MASK3, MASK4} from './constants';
import is from './is';

/* MAIN */

const Browser = {

  /* API */

  encode: ( data: Uint8Array ): string => {

    const length = Math.ceil ( data.length / 3 ) * 4;
    const reminder = ( data.length % 3 );
    const u8 = new Uint8Array ( length );

    for ( let i = 0, j = 0, l = data.length; i < l; i += 3 ) {

      const byte1 = data[i] | 0;
      const byte2 = data[i + 1] | 0;
      const byte3 = data[i + 2] | 0;
      const bytes = ( byte1 << 16 ) | ( byte2 << 8 ) | byte3;

      const code1 = ( bytes & MASK1 ) >> 18;
      const code2 = ( bytes & MASK2 ) >> 12;
      const code3 = ( bytes & MASK3 ) >> 6;
      const code4 = ( bytes & MASK4 );

      u8[j++] = ALPHABET_CODES[code1];
      u8[j++] = ALPHABET_CODES[code2];
      u8[j++] = ALPHABET_CODES[code3];
      u8[j++] = ALPHABET_CODES[code4];

    }

    if ( reminder === 1 ) { // 1 reminder byte, 2 padding characters

      u8[length - 1] = u8[length - 2] = 61;

    } else if ( reminder === 2 ) { // 2 reminder bytes, 1 padding character

      u8[length - 1] = 61;

    }

    return U8.decode ( u8 );

  },

  encodeStr: ( data: string ): string => {

    if ( !/[^\x00-\xFF]/.test ( data ) ) return btoa ( data ); // Only latin1 characters, calling btoa is safe

    return Browser.encode ( U8.encode ( data ) );

  },

  decode: ( data: string ): Uint8Array => {

    const binary = atob ( data );
    const u8 = new Uint8Array ( binary.length );

    for ( let i = 0, l = binary.length; i < l; i++ ) {

      u8[i] = binary.charCodeAt ( i );

    }

    return u8;

  },

  decodeStr: ( data: string ): string => {

    const binary = atob ( data );

    if ( !/[^\x00-\x7F]/.test ( binary ) ) return binary; // Only ascii characters, same as UTF-8 already

    const u8 = new Uint8Array ( binary.length );

    for ( let i = 0, l = binary.length; i < l; i++ ) {

      u8[i] = binary.charCodeAt ( i );

    }

    return U8.decode ( u8 );

  },

  is

};

/* EXPORT */

export default Browser;

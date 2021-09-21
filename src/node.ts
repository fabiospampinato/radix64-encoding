
/* IMPORT */

import is from './is';

/* MAIN */

const Node = {

  /* API */

  encode: ( data: Uint8Array ): string => {

    return Buffer.from ( data ).toString ( 'base64' );

  },

  encodeStr: ( data: string ): string => {

    return Buffer.from ( data ).toString ( 'base64' );

  },

  decode: ( data: string ): Uint8Array => {

    const buffer = Buffer.from ( data, 'base64' );

    return new Uint8Array ( buffer.buffer, buffer.byteOffset, buffer.byteLength );

  },

  decodeStr: ( data: string ): string => {

    return Buffer.from ( data, 'base64' ).toString ();

  },

  is

};

/* EXPORT */

export default Node;

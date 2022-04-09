
/* IMPORT */

import Buffer from 'node-buffer-encoding';
import is from './is';

/* MAIN */

const Node = {

  /* API */

  encode: ( data: Uint8Array ): string => {

    return Buffer.encode ( data, 'base64' );

  },

  encodeStr: ( data: string ): string => {

    return Buffer.encodeStr ( data, 'base64' );

  },

  decode: ( data: string ): Uint8Array => {

    return Buffer.decode ( data, 'base64' );

  },

  decodeStr: ( data: string ): string => {

    return Buffer.decodeStr ( data, 'base64' );

  },

  is

};

/* EXPORT */

export default Node;

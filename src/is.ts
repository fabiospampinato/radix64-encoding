
/* MAIN */

const is = ( data: string ): boolean => {

  if ( data.length % 4 ) return false;

  if ( !/^[a-zA-Z0-9+/]*=?=?$/.test ( data ) ) return false;

  return true;

};

/* EXPORT */

export default is;

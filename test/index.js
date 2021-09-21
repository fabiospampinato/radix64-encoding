
/* IMPORT */

const abab = require ( 'abab' );
const fc = require ( 'fast-check' );
const {describe} = require ( 'fava' );
const {default: Radix64} = require ( '../dist' );
const Fixtures = require ( './fixtures' );

global.atob = abab.atob;
global.btoa = abab.btoa;

/* MAIN */

describe ( 'Radix64', it => {

  it ( 'works with strings', t => {

    for ( const fixture of Fixtures ) {

      const encoded = Radix64.encodeStr ( fixture );
      const decoded = Radix64.decodeStr ( encoded );

      t.is ( decoded, fixture );

    }

  });

  it ( 'works with Uint8Arrays', t => {

    const encoder = new TextEncoder ();

    for ( const fixture of Fixtures ) {

      const fixtureU8 = encoder.encode ( fixture );

      const encoded = Radix64.encode ( fixtureU8 );
      const decoded = Radix64.decode ( encoded );

      t.deepEqual ( decoded, fixtureU8 );

    }

  });

  it ( 'works with fc-generated strings', t => {

    const assert = str => t.true ( !Radix64.is ( str ) || ( Radix64.decodeStr ( Radix64.encodeStr ( str ) ) === str ) );
    const property = fc.property ( fc.fullUnicodeString (), assert );

    fc.assert ( property, { numRuns: 1000000 } );

  });

  it ( 'can detect Radix64-encoded strings', t => {

    const fixtures = [
      ['', true],
      ['a', false],
      ['ab', false],
      ['abc', false],
      ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', true],
      ['====', false],
      ['a===', false],
      ['aa==', true],
      ['aaa=', true],
      ['aaaa', true],
      ['=aaa', false],
      ['==aa', false],
      ['===a', false],
      ['\uffff\uffff\uffff\uffff', false],
      ['😃', false],
      ['👪', false]
    ];

    for ( const [fixture, result] of fixtures ) {

      t.is ( Radix64.is ( fixture ), result );

    }

  });

});
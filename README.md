# Radix64 Encoding

Radix64 encoding, a.k.a. Base64 encoding. An extremely fast and synchronous JS implementation.

If you can make this faster without using WASM or async stuff please ping me.

## Install

```sh
npm install --save radix64-encoding
```

## Usage

```ts
import Radix64 from 'radix64-encoding';

// Uint8Array encoding & decoding

{
  const raw = 'Hello 😃';
  const uint8 = new TextEncoder ().encode ( raw );
  console.log ( uint8 ); // => Uint8Array(10) [ 72, 101, 108, 108, 111,  32, 240, 159, 152, 131 ]

  const encoded = Radix64.encode ( uint8 );
  console.log ( encoded ); // => 'SGVsbG8g8J+Ygw=='

  const decoded = Radix64.decodeStr ( encoded );
  console.log ( decoded ); // => // => Uint8Array(10) [ 72, 101, 108, 108, 111,  32, 240, 159, 152, 131 ]
}

// String encoding & decoding

{
  const raw = 'Hello 😃';
  const encoded = Radix64.encodeStr ( raw );
  console.log ( encoded ); // => 'SGVsbG8g8J+Ygw=='

  const decoded = Radix64.decodeStr ( encoded );
  console.log ( decoded ); // => 'Hello 😃'
}

// Check if a string is radix64-encoded

{
  console.log ( Radix64.is ( 'SGVsbG8g8J+Ygw==' ) ); // => true
  console.log ( Radix64.is ( '😃' ) ); // => false
}
```

## License

MIT © Fabio Spampinato

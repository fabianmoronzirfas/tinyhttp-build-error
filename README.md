# @tinyhttp build error

While playing with @tinyhttp I ran into the following problem.
When trying to build with the `tsconfig.json` below, 


```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```

I run into the following build error.  


```plain
> npm run build

> tinyhttp-request-error@0.0.1 build /Users/mememe/tmp/tinyhttp-build-error
> tsc

node_modules/@tinyhttp/app/dist/request.d.ts:4:24 - error TS7016: Could not find a declaration file for module 'range-parser'. '/Users/mememe/tmp/tinyhttp-build-error/node_modules/range-parser/index.js' implicitly has an 'any' type.
  Try `npm install @types/range-parser` if it exists or add a new declaration (.d.ts) file containing `declare module 'range-parser';`

4 import { Ranges } from 'range-parser';
                         ~~~~~~~~~~~~~~

node_modules/@tinyhttp/req/dist/index.d.ts:2:37 - error TS7016: Could not find a declaration file for module 'range-parser'. '/Users/mememe/tmp/tinyhttp-build-error/node_modules/range-parser/index.js' implicitly has an 'any' type.
  Try `npm install @types/range-parser` if it exists or add a new declaration (.d.ts) file containing `declare module 'range-parser';`

2 import parseRange, { Options } from 'range-parser';
                                      ~~~~~~~~~~~~~~


Found 2 errors.
```

What is a recommended typescript configuration? Or why do I get this error?
The `tsconfig.json` is taken from a https://prisma.io tutorial.

FYI: When I use the default `tsconfig.json` generated with `npx tsc --init` the build works fine.


# mobtimer

## installation de nodejs 

```bash
tar xvf node...tar
ln -s node-v16... node

cd back
npm install
npm install typescript@4.2.4
npm install express@4.17.1
npm install @types/express@4.17.1

# npm install --save-dev ts-node-dev@1.0.0-pre.44 tslint@6.1.2 @types/node@14.0.5 

tsc --esModuleInterop mobtimer.ts
```


## Resources utilisées

- https://developer.okta.com/blog/2019/05/07/nodejs-typescript-api

resource que j'ai lu, intéressante également et express fonctionne avec typescript
https://blog.logrocket.com/typescript-with-node-js-and-express/
En utilisant cette séquence de commandes :

```bash 
npm init
npm install -g npm@7.15.1
npm install --save-dev typescript tslint @types/node
subl tsconfig.json
subl tslint.json
mkdir src
subl src/index.ts
./node_modules/.bin/tsc
node ./dist/index.js
npm install express
npm --save-dev install @types/node @types/express
subl src/try_express.ts
./node_modules/.bin/tsc
node dist/src/try_express.js
⚡️[server]: Server is running at https://localhost:8000
```

file tsconfig.json :

```json
{
  "compilerOptions": {
    "lib": ["es2015"],
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "rootDir": "./",
    "esModuleInterop": true,
    "target": "es2015"
  },
  "include": [
    "src"
  ]
}
```

tslint.json
```json
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "rules": {
    "semicolon": false,
    "trailing-comma": false
  }
}
```

## TDD with typescript
- https://jestjs.io/docs/getting-started

- https://basarat.gitbook.io/typescript/intro-1/jest

```
npm install jest @types/jest ts-jest -D
```
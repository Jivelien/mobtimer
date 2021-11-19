# mobtimer

Test

## TODO
problème transpiler les tests.
Erreur sur le test en typescript, il n'est pas transpilé.
nous n'avons pas essayer la commande ts... et ensuite jest


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


## TDD & Typescript

Pour installer le framework de test : jest nous avons utilisé la resource suivante 
https://basarat.gitbook.io/typescript/intro-1/jest

Il faut donc installer jest via cette commande :

```bash 
npm i jest @types/jest ts-jest typescript -D
```


Ensuite configurer jest avec ce fichier de configuration `jest.config.js` :

```javascript
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
```

Ce fichier permet de lancer des test écrit en typescript en faisant usage la commande `ts-jest`
Il va chercher les tests en partant du répertoire `src`

Pour lancer les tests utiliser la commande :

```bash
npx jest
```

## TDD with typescript
- https://jestjs.io/docs/getting-started

- https://basarat.gitbook.io/typescript/intro-1/jest

```
npm install jest @types/jest ts-jest -D
```


## resource jest comparaison / équalité toBe toEqual
https://dev.to/thejaredwilcurt/why-you-should-never-use-tobe-in-jest-48ca

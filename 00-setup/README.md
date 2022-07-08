# Typescript Setup

```
tsc --init
```

Esto crea el archivo tsconfig. Aqui se configura typescript

## Quarchivos se transpilan?

```
 "exclude": [
    "node_modeules", // es un default, si no se aclara se va a excluir. Pero si se usa exclude, hay que agregarlo.
    "*.dev.ts", // wildcard: todos los que terminen de esa forma.
    "**/*.dev.ts" // wildcard: idem, pero en cualquier carpeta.
  ],
  "inlcude": ["**/*.ts"],
```

se usan para apuntar a colecciones o grupos de archivos o carpetas.

```
"files": ['app.ts',main.ts]
```

se usa para especificar archivos separados directamente por su ruta

## Donde?

```
  "outFile": "./boundle", // Concatenate and emit output to single file.
  "outDir": "./dist",  // Redirect output structure to the directory.
  "rootDir": "./src", // Specify the root directory of input files. Use to control the output directory structure with --outDir. 
```

## Docs
- tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
- VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging
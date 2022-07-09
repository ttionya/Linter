/* eslint-disable */
/* eslint-enable @typescript-eslint/no-namespace */

export default 1

// allowDeclarations
declare module 'foo1' {}
declare module foo {}
declare namespace foo {}

declare global {
  namespace foo {}
}

declare module foo {
  namespace foo {}
}

// allowDefinitionFiles
declare module 'foo2' {}

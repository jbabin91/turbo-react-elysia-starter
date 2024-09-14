export default {
  // Type check TypeScript files
  '*.(ts|tsx)': () => 'pnpm typecheck',
  // Lint and Format TypeScript and JavaScript files
  '*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}': () => [
    'biome check --write --no-errors-on-unmatched', // Format, sort imports, lint, and apply safe fixes
  ],
};

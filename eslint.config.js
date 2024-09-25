import js from '@eslint/js';
import pluginNode from 'eslint-plugin-node';

export default [
  // Base ESLint recommended configuration
  js.configs.recommended,

  // Common configuration for all files
  {
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    ignores: ['node_modules/', 'dist/'],
    languageOptions: {
      ecmaVersion: 2021,  // ECMAScript 2021 support
      sourceType: 'module',  // ES modules
      globals: {
        browser: true,  // Allow browser globals (like window, document)
        node: true,     // Allow Node.js globals (like process, global)
      },
    },
    rules: {
      'no-console': 'off',  // Allow console logs globally
    },
    plugins: {
      node: pluginNode,  // Include node plugin
    },
  },

  // Node.js-specific configuration
  {
    files: ['./app/backend/**/*.js', './app/backend/**/*.ts'],
    languageOptions: {
      globals: {
        node: true,  // Node.js globals for backend files
      },
    },
    rules: {
      // You can add any specific rules for Node.js files here
    },
  },

  // Browser-specific configuration
  {
    files: ['./app/view/**/*.jsx', './app/view/**/*.js', './app/view/**/*.tsx', './app/view/**/*.ts'],
    languageOptions: {
      globals: {
        browser: true,  // Browser globals for frontend files
      },
    },
    rules: {
      // You can add any specific rules for browser files here
    },
  },

  // Node plugin recommended configuration
  {
    plugins: {
      node: pluginNode,
    },
    // rules: pluginNode.configs.recommended.rules,  // Apply node plugin recommended rules
  },
];
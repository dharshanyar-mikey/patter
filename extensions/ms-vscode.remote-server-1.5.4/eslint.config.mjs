import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import headersPlugin from 'eslint-plugin-headers';

export default tseslint.config(
	{
		ignores: ['**/*.d.ts', 'dist/**', 'out/**', '*.js'],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			'headers': headersPlugin,
		},
		rules: {
			'@typescript-eslint/naming-convention': 'off',
			'curly': 'warn',
			'eqeqeq': 'warn',
			'no-throw-literal': 'warn',
			'headers/header-format': [
				'error',
				{
					source: 'string',
					style: 'jsdoc',
					content: '---------------------------------------------------------\n * Copyright (C) Microsoft Corporation. All rights reserved.\n *--------------------------------------------------------',
					blockPrefix: '',
					blockSuffix: '',
					linePrefix: '',
				},
			],
		},
	}
);

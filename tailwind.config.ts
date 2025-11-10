import type { Config } from 'tailwindcss'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bg: '#0b0c10',
				text: '#e5e7eb',
				muted: '#9aa0a6',
				card: '#111217',
				accent: '#64ffda',
				border: '#1f2937',
			},
			fontFamily: {
				mono: ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
			},
			boxShadow: {
				soft: '0 10px 30px -15px rgba(0,0,0,0.6)',
			},
			maxWidth: {
				content: '960px',
			},
		},
	},
	plugins: [],
} satisfies Config



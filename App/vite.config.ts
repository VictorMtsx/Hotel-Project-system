import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist', // Onde os arquivos serão gerados
		assetsDir: 'assets', // Pasta para os arquivos estáticos
	  },
	server: {
		host: true,
		port: 5173,
		proxy: {
			"/autorization": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
			"/sign-up": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
			"/log-in": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
			"/home-page": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
		},
	},
});

// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		outDir: "build", // Adjust this to match your expected output directory
		rollupOptions: {
			output: {
				manualChunks(id) {
					// Example of chunking logic:
					if (id.includes("node_modules")) {
						return "vendor"; // All node_modules go to a single chunk named 'vendor'
					}
				},
			},
		},
		chunkSizeWarningLimit: 500, // Adjust the limit as needed
	},
});

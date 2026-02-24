import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    const vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom'
    });

    try {
        const url = '/';
        const template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

        // Load the server entry point
        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

        // Render the app HTML
        const { html: appHtml } = await render(url);

        // Inject the rendered HTML into the template
        const html = template.replace('<!--ssr-outlet-->', appHtml);

        const distPath = path.join(__dirname, 'dist');
        if (!fs.existsSync(distPath)) {
            fs.mkdirSync(distPath);
        }

        fs.writeFileSync(path.join(distPath, 'index.html'), html);
        console.log('✅ Prerendering complete! dist/index.html updated (cloud-compatible).');

    } catch (err) {
        console.error('❌ Prerendering failed:', err);
    } finally {
        await vite.close();
        process.exit(0);
    }
}

run();

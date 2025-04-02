import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  res.json('Helo from CI/CD');
});

const PORT = process.env.PORT || 3000;

// Obtenir le chemin du fichier courant (équivalent __filename)
const __filename = fileURLToPath(import.meta.url);

// Si ce fichier est exécuté directement (pas importé)
if (process.argv[1] === __filename) {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}

export default app;

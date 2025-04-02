const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json('Helo from CI/CD');
  });

const PORT = process.env.PORT || 4444
if (require.main === module) {    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }

  module.exports = app;
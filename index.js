const express = require('express')

const app = express()

app.get('/', (req,res)=> {
    res.json('Helo from CI/CD')
})

if (require.main === module) {
    console.log(require.main === module);
    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }

  module.exports = app;
// const express = require('express')
import express from 'express'

const app = express()

app.get('/', (req,res)=> {
    res.json('Helo from CI/CD')
})


const PORT = process.env.PORT || 3000;
if (process.argv[1] === new URL(import.meta.url).pathname) {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }

  
  export default app;
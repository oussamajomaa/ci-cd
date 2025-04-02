// const express = require('express')
import express from 'express'

const app = express()

app.get('/', (req,res)=> {
    res.json('Helo from CI/CD')
})


const PORT = process.env.PORT || 3009;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }

  
  export default app;
const express = require('express')
const app = express()
const port = 3000

const { createClient } = require('@supabase/supabase-js')
// import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jpamagwvbcchrbysbhlg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwYW1hZ3d2YmNjaHJieXNiaGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NTExNjEsImV4cCI6MjA0ODAyNzE2MX0.8gzIdWt44V-lHHZCaD9oWu6Kjg-M_BJJBLwqjTD1gbg'
const supabase = createClient(supabaseUrl, supabaseKey)

app.get('/client', async (req, res) => {
  const {data, error} = await supabase
  .from('client')
  .select ()
  res.json(data)
 
})
app.post('/client', (req, res) => {
  res.send('изменение студентов')
})

app.delete('/client', (req, res) => {
  res.send('удаление студентов')
})

app.put('/client', (req, res) => {
  res.send('изменение студентов')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
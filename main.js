#!/usr/bin/env node

function parseDatabaseUrl () {
  const url = process.argv[2]
  if (!url) throw new Error('Must provide url')
  const database = url.split('/').pop()
  const [ username, middle ] = url.split('//').pop().split(':')
  const [ password, host ] = middle.split('@')
  console.log(`
    database: ${ database }
    username: ${ username }
    password: ${ password }
    host: ${ host }
  `)
}

parseDatabaseUrl()
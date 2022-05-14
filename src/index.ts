import app from './app'

app.listen(app.get('port'))
console.log('\n', `
--------------------------
|                        |
| 🚨 SERVER ON PORT ${app.get('port')} |
|                        |
--------------------------`, '\n')

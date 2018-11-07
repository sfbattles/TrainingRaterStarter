const app = require('../app');

const port = 3000;

app.set('port',port);

app.listen(port, () => console.log(`App listening on port ${port}! Press Ctrl-c to stop server`))
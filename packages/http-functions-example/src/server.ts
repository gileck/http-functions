import * as path from 'path';
import * as express from 'express';
import { httpFunctions } from 'http-functions-express';

const html = `
<!doctype html>
<html>
  <head>
    <title>http-functions-example</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="http://localhost:3200/app.bundle.js"></script>
  </body>
</html>
`;

const folder = path.join(__dirname, 'backend');
export default express()
  .use(express.json())
  .use('/api', httpFunctions(folder, /\.web\.(js|ts)$/))
  .use('/', (req, res) => res.send(html))
  .listen(process.env.PORT || 3000);

import { createConnection } from 'typeorm';
import app from '../';

// TODO: DataBase Connection configuration
createConnection();

app.set('port', 3000);

app.use((req, res, next) => {
  return next({status: 404, message: 'Not Found'});
})

app.use(async (err, req, res, next) => {
  const { status, message } = err;
  return res.status(status).send(message);
});

app.listen(app.get('port'), () => {
  console.log('Server is running on port', app.get('port'));
});
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import { Request } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'
import OperadoraModel from 'App/Models/Operadora'

Route.get('/', async () => {
  const registros = await OperadoraModel.all()
  return { data: registros }
})
Route.get('/search', async ({ request }) => {
  const query = request.qs().query
  console.log(query)
  const registros = await OperadoraModel.query().where('razao_social', 'like', `%${query}%`)
  return { data: registros }
})

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

//import { Request } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'
import OperadoraModel from 'App/Models/Operadora'

Route.get('/', async () => {
  const registros = await OperadoraModel.all()
  return { data: registros }
})
Route.post('/', async ({ request }) => {
  const registros = await OperadoraModel.create({
    cnpj: request.input('cnpj'),
    registro_ans: request.input('registro_ans'),
    razao_social: request.input('razao_social'),
    nome_fantasia: request.input('nome_fantasia'),
    modalidade: request.input('modalidade'),
    logradouro: request.input('logradouro'),
    numero: request.input('numero'),
    complemento: request.input('complemento'),
    bairro: request.input('bairro'),
    cidade: request.input('cidade'),
    uf: request.input('uf'),
    cep: request.input('cep'),
    ddd: request.input('ddd'),
    telefone: request.input('telefone'),
    fax: request.input('fax'),
    endereco_eletronico: request.input('endereco_eletronico'),
    representante: request.input('representante'),
    cargo_representante: request.input('cargo_representante'),
    data_registro_ans: new Date(request.input('data_registro_ans')),
  })
  return { data: registros }
})
Route.get('/search', async ({ request }) => {
  const query = request.qs().query
  console.log(query)
  const registros = await OperadoraModel.query()
    .where('razao_social', 'like', `%${query}%`)
    .orWhere('nome_fantasia', 'like', `%${query}%`)
    .orWhere('modalidade', 'like', `%${query}%`)
    .orWhere('cnpj', 'like', `%${query}%`)
    .orWhere('registro_ans', 'like', `%${query}%`)
    .orWhere('logradouro', 'like', `%${query}%`)
    .orWhere('numero', 'like', `%${query}%`)
    .orWhere('complemento', 'like', `%${query}%`)
    .orWhere('bairro', 'like', `%${query}%`)
    .orWhere('cidade', 'like', `%${query}%`)
    .orWhere('uf', 'like', `%${query}%`)
    .orWhere('cep', 'like', `%${query}%`)
    .orWhere('ddd', 'like', `%${query}%`)
    .orWhere('telefone', 'like', `%${query}%`)
    .orWhere('fax', 'like', `%${query}%`)
    .orWhere('endereco_eletronico', 'like', `%${query}%`)
    .orWhere('representante', 'like', `%${query}%`)
    .orWhere('cargo_representante', 'like', `%${query}%`)
  return { data: registros }
})
Route.put('/:id', async ({ request }) => {
  const id = request.param('id')
  const registros = await OperadoraModel.updateOrCreate(
    {
      id,
    },
    {
      cnpj: request.input('cnpj'),
      registro_ans: request.input('registro_ans'),
      razao_social: request.input('razao_social'),
      nome_fantasia: request.input('nome_fantasia'),
      modalidade: request.input('modalidade'),
      logradouro: request.input('logradouro'),
      numero: request.input('numero'),
      complemento: request.input('complemento'),
      bairro: request.input('bairro'),
      cidade: request.input('cidade'),
      uf: request.input('uf'),
      cep: request.input('cep'),
      ddd: request.input('ddd'),
      telefone: request.input('telefone'),
      fax: request.input('fax'),
      endereco_eletronico: request.input('endereco_eletronico'),
      representante: request.input('representante'),
      cargo_representante: request.input('cargo_representante'),
      data_registro_ans: new Date(request.input('data_registro_ans')),
    }
  )
  return { data: registros }
})

Route.delete('/:id', async ({ request }) => {
  const id = request.param('id')
  const registros = await OperadoraModel.findOrFail(id)
  await registros.delete()
})

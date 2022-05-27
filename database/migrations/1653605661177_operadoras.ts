import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'operadoras'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('registro_ans')
      table.string('cnpj')
      table.string('razao_social')
      table.string('nome_fantasia')
      table.string('modalidade')
      table.string('logradouro')
      table.string('numero')
      table.string('complemento')
      table.string('bairro')
      table.string('cidade')
      table.string('uf')
      table.string('cep')
      table.string('ddd')
      table.string('telefone')
      table.string('fax')
      table.string('endereco_eletronico')
      table.string('representante')
      table.string('cargo_representante')
      table.date('data_registro_ans')

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

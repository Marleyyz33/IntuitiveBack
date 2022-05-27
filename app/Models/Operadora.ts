import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OperadoraModel extends BaseModel {
  public static table = 'operadoras'

  @column({ isPrimary: true })
  public id: number

  @column()
  public registro_ans: string

  @column()
  public cnpj: string

  @column()
  public razao_social: string

  @column()
  public nome_fantasia: string

  @column()
  public modalidade: string

  @column()
  public logradouro: string

  @column()
  public numero: string

  @column()
  public complemento: string

  @column()
  public bairro: string

  @column()
  public cidade: string

  @column()
  public uf: string

  @column()
  public cep: string

  @column()
  public ddd: string

  @column()
  public telefone: string

  @column()
  public fax: string

  @column()
  public endereco_eletronico: string

  @column()
  public representante: string

  @column()
  public cargo_representante: string

  @column()
  public data_registro_ans: Date
}

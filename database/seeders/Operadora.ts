//eslint-disable-next-line
import el from '../myOutputFile.json'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OperadoraModel from 'App/Models/Operadora'

export default class OperadoraSeeder extends BaseSeeder {
  public static table = 'operadoras'

  public async run() {
    const registros = []
    for (let index = 0; index < el.length; index++) {
      const a = {
        registro_ans: el[index]['Registro ANS']?.toString() || '',
        cnpj: el[index].CNPJ?.toString() || '',
        razao_social: el[index]['Razão Social'] || '',
        nome_fantasia: el[index]['Nome Fantasia'] || '',
        modalidade: el[index].Modalidade || '',
        logradouro: el[index].Logradouro || '',
        numero: el[index]['Número']?.toString() || '',
        complemento: el[index].Complemento || '',
        bairro: el[index].Bairro || '',
        cidade: el[index].Cidade || '',
        uf: el[index].UF || '',
        cep: el[index].Cep || '',
        ddd: el[index].DDD?.toString() || '',
        telefone: el[index].Telefone?.toString() || '',
        fax: el[index].Fax?.toString() || '',
        endereco_eletronico: el[index]['Endereço eletrônico'] || '',
        representante: el[index].Representante || '',
        cargo_representante: el[index]['Cargo Representante'] || '',
        data_registro_ans: el[index]['Data Registro ANS']
          ? new Date(el[index]['Data Registro ANS'])
          : new Date(),
      }
      registros.push(a)
    }
    await OperadoraModel.createMany(registros)
  }
}

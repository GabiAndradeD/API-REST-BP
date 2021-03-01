const {BigQuery} = require('@google-cloud/bigquery');

  function logarBigquery(){
    //const {BigQuery} = require('@google-cloud/bigquery');

    const options = {
      keyFilename: './chave-bigquery.json',
      projectId: 'bpx-dominacaomundial',
    };

    const bigquery = new BigQuery(options);

    return bigquery;
  }

   module.exports = async (email) => {

    const bigquery = logarBigquery();

    const query = `SELECT *
      FROM [bpx-dominacaomundial.ProjetoBP.Funcionarios]`;

    const option = {
      query: query,
      location: 'US',
      useLegacySql: true
    };

    const [job] = await bigquery.createQueryJob(option);

    const [rows] = await job.getQueryResults();

    rows.forEach(row => console.log(row));

    if(rows.length < 0){
      return null;
    } else{
      return rows;
    }

  }
  
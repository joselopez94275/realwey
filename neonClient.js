const axios = require('axios');

const neonClient = axios.create({
  baseURL: 'https://ep-patient-leaf-anrbfho5.apirest.c-6.us-east-1.aws.neon.tech/neondb/rest/v1',
  headers: {
    Authorization: `Bearer ${process.env.NEON_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

module.exports = neonClient;

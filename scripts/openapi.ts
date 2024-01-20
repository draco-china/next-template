const { generateService } = require('@umijs/openapi');
const { join } = require('path');

generateService({
  requestLibPath: "import request from '@/lib/request';",
  // schemaPath: 'http://petstore.swagger.io/v2/swagger.json',
  schemaPath: join(__dirname, 'openapi.json'),
  // projectName: 'mall',
  serversPath: './service',
});

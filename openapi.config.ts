import { generateService } from '@umijs/openapi';

generateService({
  requestLibPath: "import request from '@/lib/request';",
  schemaPath: 'https://generator.swagger.io/api/swagger.json',
  // schemaPath: join(__dirname, 'openapi.json'),
  // projectName: 'api',
  serversPath: './src/service',
});

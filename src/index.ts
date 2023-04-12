import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { TuyaContext } from '@tuya/tuya-connector-nodejs';
import dotenv from 'dotenv';

dotenv.config();

const accessKey = process.env.TUYA_ACCESS_KEY!;
const secretKey = process.env.TUYA_SECRET_KEY!;

const argv = yargs(hideBin(process.argv))
  .command(
    'get-local-key',
    'Get the local key of the specified device',
    (yargs) => {
      yargs.positional('device-id', {
        describe: 'Device ID',
        type: 'string',
      });
    },
    async (argv) => {
      const deviceId = argv['device-id'];

      const tuya = new TuyaContext({
        baseUrl: 'https://openapi.tuyaeu.com',
        accessKey: accessKey,
        secretKey: secretKey,
      });

      try {
        const result = await tuya.request({
          method: 'GET',
          path: `/v1.0/devices/${deviceId}`,
        });

        console.log(JSON.stringify(result));
      } catch (error) {
        console.error('Error:', error);
      }
    }
  )
  .help()
  .alias('help', 'h').argv;

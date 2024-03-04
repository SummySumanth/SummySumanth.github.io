const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const client = new SecretManagerServiceClient();

async function accessSecret(keyName) {
  const [version] = await client.accessSecretVersion({
    name: `projects/392632175768/secrets/${keyName}/versions/latest`,
  });
  return version.payload.data.toString('utf8');
}

function Environment(NODE_ENV) {
  if (process.env.NODE_ENV === 'production') {
    const mediumToken = accessSecret('medium-api-token');
    this.keysAndValues = {
      mediumToken,
    };
  } else {
    const mediumToken = process.env.MEDIUM_API_KEY;
    this.keysAndValues = {
      mediumToken,
    };
  }
  this.NODE_ENV = NODE_ENV || 'development';
}

module.exports = new Environment(process.env.NODE_ENV);

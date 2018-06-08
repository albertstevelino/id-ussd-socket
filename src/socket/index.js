const _ = require('lodash');
const argv = require('yargs').argv;

const app = require('http').createServer();
const io = require('socket.io')(app);
const { PROVIDERS, INFO } = require('../config/provider');
const QUOTA_INTERVAL = 10 * 1000;
const BALANCE_INTERVAL = 30 * 1000;

const port = argv.port || 9001;
app.listen(port);

const mobile = io.of('/mobile');
const monitor = io.of('/monitor');

const getProviderInfo = number => {
  const first4Digits = number.substr(0, 4);
  return _.get(INFO, first4Digits);
};

mobile.on('connection', mobileSocket => {
  try {
    const query = mobileSocket.handshake.query;
    const mobilePhoneNumber = _.get(query, 'number', '0000');
    const mobileInfo = getProviderInfo(mobilePhoneNumber);

    mobileSocket.join(mobileInfo.provider.name);

    mobileSocket.on('received-quota', response => {
      console.log('recieved quota data from', response.number);

      const info = getProviderInfo(response.number);
      const payload = {
        number: response.number,
        datetime: response.datetime,
        quota: response.text,
        provider: info
      };
      monitor.emit('update', payload);
    });

    mobileSocket.on('received-balance', response => {
      console.log('recieved balance data from', response.number);

      const info = getProviderInfo(response.number);
      const payload = {
        number: response.number,
        datetime: response.datetime,
        balance: response.text,
        provider: info.provider
      };
      monitor.emit('update', payload);
    });

    console.log(`A new mobile client socket from ${mobilePhoneNumber} has join room ${mobileInfo.provider.name}`);
  } catch (error) {
    console.log(error);
  }
});

monitor.on('connection', monitorSocket => {
  try {
    console.log(`A new monitor client has connected`);

    pingBalance();
    pingQuota();
  } catch (error) {
    console.log(error);
  }
});

function pingQuota() {
  console.log(`Ping quota to all providers`);

  for (const provider of _.values(PROVIDERS)) {
    mobile.to(provider.name).emit('check-quota', provider.ussd.quota);
  }
}

function pingBalance() {
  console.log(`Ping balance to all providers`);

  for (const provider of _.values(PROVIDERS)) {
    mobile.to(provider.name).emit('check-balance', provider.ussd.balance);
  }
}

console.log(`Socket start on port ${port}`);

setInterval(pingQuota, QUOTA_INTERVAL);
setInterval(pingBalance, BALANCE_INTERVAL);

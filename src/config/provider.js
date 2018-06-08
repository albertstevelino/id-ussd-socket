exports.PROVIDERS = {
  'XL': { name: 'XL', ussd: { balance: '*123#', quota: 'xl-quota' } },
  'TELKOMSEL': { name: 'TELKOMSEL', ussd: { balance: 'tel-bal', quota: 'tel-quota' } },
  'INDOSAT': { name: 'INDOSAT', ussd: { balance: 'i-bal', quota: 'i-quota' } },
  '3': { name: '3', ussd: { balance: '3-bal', quota: '3-quota' } },
  'AXIS': { name: 'AXIS', ussd: { balance: 'ax-bal', quota: 'ax-quota' } },
  'SMARTFREN': { name: 'SMARTFREN', ussd: { balance: 'smart-bal', quota: 'smart-quota' } }
};

const providers = exports.PROVIDERS;

exports.INFO = {
  '0811': { provider: providers.TELKOMSEL, type: 'HALO' },
  '0812': { provider: providers.TELKOMSEL, type: 'HALO' },
  '0813': { provider: providers.TELKOMSEL, type: 'HALO' },
  '0821': { provider: providers.TELKOMSEL, type: 'SIMPATI' },
  '0822': { provider: providers.TELKOMSEL, type: 'SIMPATI/FACEBOOK' },
  '0823': { provider: providers.TELKOMSEL, type: 'AS' },
  '0851': { provider: providers.TELKOMSEL, type: 'AS' },
  '0852': { provider: providers.TELKOMSEL, type: 'AS' },
  '0853': { provider: providers.TELKOMSEL, type: 'AS' },

  '0814': { provider: providers.INDOSAT, type: 'M2 BROADBAND' },
  '0815': { provider: providers.INDOSAT, type: 'MATRIX/MENTARI' },
  '0816': { provider: providers.INDOSAT, type: 'MATRIX/MENTARI' },
  '0855': { provider: providers.INDOSAT, type: 'MATRIX' },
  '0856': { provider: providers.INDOSAT, type: 'IM3' },
  '0857': { provider: providers.INDOSAT, type: 'IM3' },
  '0858': { provider: providers.INDOSAT, type: 'MENTARI' },

  '0817': { provider: providers.XL, type: 'XL' },
  '0818': { provider: providers.XL, type: 'XL' },
  '0819': { provider: providers.XL, type: 'XL' },
  '0859': { provider: providers.XL, type: 'XL' },
  '0877': { provider: providers.XL, type: 'XL' },
  '0878': { provider: providers.XL, type: 'XL' },

  '0895': { provider: providers['3'], type: '3' },
  '0896': { provider: providers['3'], type: '3' },
  '0897': { provider: providers['3'], type: '3' },
  '0898': { provider: providers['3'], type: '3' },
  '0899': { provider: providers['3'], type: '3' },

  '0881': { provider: providers.SMARTFREN, type: 'SMARTFREN' },
  '0882': { provider: providers.SMARTFREN, type: 'SMARTFREN' },
  '0883': { provider: providers.SMARTFREN, type: 'SMARTFREN' },
  '0884': { provider: providers.SMARTFREN, type: 'SMARTFREN' },
  '0885': { provider: providers.SMARTFREN, type: 'SMARTFREN' },
  '0886': { provider: providers.SMARTFREN, type: 'SMARTFREN' },
  '0887': { provider: providers.SMARTFREN, type: 'SMARTFREN' },
  '0888': { provider: providers.SMARTFREN, type: 'SMARTFREN' },
  '0889': { provider: providers.SMARTFREN, type: 'SMARTFREN' },

  '0831': { provider: providers.AXIS, type: 'AXIS' },
  '0832': { provider: providers.AXIS, type: 'AXIS' },
  '0833': { provider: providers.AXIS, type: 'AXIS' },
  '0838': { provider: providers.AXIS, type: 'AXIS' },
};

const config = {
  verbose: true,
};

export default {
  ...config,
  extensionsToTreatAsEsm: ['.js, .jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};

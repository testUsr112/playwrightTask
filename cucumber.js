export default {
  default: {
    require: [
      'features/steps/*.steps.js'
    ],
    paths: ['features/*.feature'],
    format: ['progress']
  }
};
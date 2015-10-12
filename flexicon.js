var FlexiconGenerator = require('flexicon-generator');

FlexiconGenerator = new FlexiconGenerator('./src/svg/*.svg', {
  dist:'./dist',
  templates: {
    html:'./src/html/flexicon.html'
  }
});

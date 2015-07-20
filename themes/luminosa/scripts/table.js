/* global hexo */
// Tag plugin for Semantic Table Collections(http://semantic-ui.com/collections/table.html)


// Usage: {% table class %} Something {% endtable %}
// = <table class="ui table {extra-class}"></table>
hexo.extend.tag.register('table', function (args, content) {
  return (
    '<table class="ui table ' + args.join(' ') + '">' +
    hexo.render.renderSync({text: content, engine: 'markdown'}).replace('<table>', '')
  );
}, {ends: true});

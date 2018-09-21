const html = require('html-template-tag');
const layout = require('./layout');

module.exports = pages => {
  console.log(pages);
  return layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
<li></li>
      ${pages
        .map(page => {
          `<li> <a href=/wiki/${page.slug}>${page.title}</a></li>`;
        })
        .join('')}

  </ul>`);
  console.log(pages
    .map(page => {
      `<li> <a href=/wiki/${page.slug}>${page.title}</a></li>`;
    })
    .join('')})
};

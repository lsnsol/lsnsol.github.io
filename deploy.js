var ghpages = require('gh-pages');

ghpages.publish('out',
    {
        nojekyll: true,
        cname: 'solutions.lurisan.in',
        dotfiles: true,        
    },
    function (err) {
        console.log(err)
    });
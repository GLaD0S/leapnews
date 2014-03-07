function getRSS(url)
{
jQuery(function() {

    /*var feedsUrls = ['js/jFeed/xml/rss-091.xml',
                     'js/jFeed/xml/rss-092.xml',
                     'js/jFeed/xml/rss-10.xml',
                     'js/jFeed/xml/rss-20.xml',
                     'js/jFeed/xml/atom.xml'];*/

    /*var feedsUrls = ['http://www.npr.org/rss/rss.php?id=1001'];*/

  
    jQuery().ajaxError(function(request, settings, ex) {
        console.log('Request error');
        for(var i in ex) {
            console.log(i + ': ' + ex[i]);
        }
    });
                 
    /*for(var i = 0; i < feedsUrls.length; i++) {*/

        jQuery.getFeed({url: url, success: function(feed) {
        
        /*console.log('feed type: ' + feed.type);
            console.log('feed version: ' + feed.version);
            console.log('feed title: ' + feed.title);
            console.log('feed link: ' + feed.link);
            console.log('feed description: ' + feed.description);
            console.log('feed language: ' + feed.language);
            console.log('feed updated: ' + feed.updated);
            console.log('feed items: ' + feed.items.length);*/
            
            /*for(var j = 0; j < feed.items.length; j++) {
            
                console.log('item ' + j + ' title: ' + feed.items[j].title);
                console.log('item ' + j + ' link: ' + feed.items[j].link);
                console.log('item ' + j + ' description: '
                + feed.items[j].description);
                console.log('item ' + j + ' updated: ' + feed.items[j].updated);
                console.log('item ' + j + ' id: ' + feed.items[j].id);
            }
        }*/

        return feed;
        
        }});
    //}
});

}
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'BanchaTouch': 'app'
});

Ext.application({
    name: 'BanchaTouch',
    /*views:['Main'],*/
    controllers: ['Main'],
    
    icon: 'resources/images/iTunesArtwork.png',
    glossOnIcon: true,
    phoneStartupScreen: 'resources/loading/phone_startup.png',
    tabletStartupScreen: 'resources/loading/tablet_startup.png',

    
    launch: function() {
        Ext.Viewport.add(Ext.create('BanchaTouch.view.Main'));
    }
});

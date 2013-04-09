Ext.Loader.setPath({
    'Ext': 'touch/src',
    'BanchaTouch': 'app'
});

Ext.application({
    
    launch: function() {
        Ext.Viewport.add(Ext.create('BanchaTouch.view.Main'));
    }
});

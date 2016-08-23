var
    defaultTemplate = '<div id="PS"><a href="#" id="PS__click">click</a></div>',
    secondaryTemplate = '<div id="PS"><a href="#" id="PS__click--secondary">click secondary</a></div>',
    model = new Backbone.Model(),
    View = Marionette.ItemView.extend({
        getTemplate: function () {
            if (this.model.get("foo")){
                console.log("secondaryTemplate");
                return secondaryTemplate;
            }
            else {
                console.log("defaultTemplate");
                return defaultTemplate;
            }
        }
    }),

    view = new View({
        model: model
    });

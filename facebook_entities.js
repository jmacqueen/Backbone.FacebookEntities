Backbone.FacebookModel = Backbone.Model.extend({
	sync: function(method, model, options){

		// Ensure that we have a URL.
		var fbApiUrl;
		if (!options.url) {
			fbApiUrl = model.get("url");
		} else {
			fbApiUrl = options.url;
		}

		// Fields to pull: Fields are a comma separated list, no spaces
		if (!options.fields) {
			options.fields = model.get("fields");
		}

		switch (method) {
			case 'create':
			break;

			case 'update':
			break;

			case 'delete':
			break;

			case 'read':
				if (options.fields){
					fbApiUrl = fbApiUrl + "?fields=" + options.fields;
				}
				FB.api(fbApiUrl, function(result){
					if (result.error) {
						options.error(result);
					} else {
						options.success(result);
					}
				});
			break;
		}
	}
});

Backbone.FacebookCollection = Backbone.Collection.extend({
	sync: function(method, collection, options){
		// Ensure that we have a URL.
		var fbApiUrl;
		if (!options.url) {
			fbApiUrl = collection.url;
		} else {
			fbApiUrl = options.url;
		}
		// Fields to pull: Fields are a comma separated list, no spaces
		if (!options.fields) {
			options.fields = collection.fields;
		}

		switch (method) {
			case 'create':
			break;

			case 'update':
			break;

			case 'delete':
			break;

			case 'read':
				if (options.fields){
					fbApiUrl = fbApiUrl + "?fields=" + options.fields;
				}
				FB.api(fbApiUrl, function(result){
					if (result.error) {
						options.error(result.error);
					} else {
						options.success(result.data);
					}

				});
			break;
		}

	}
});

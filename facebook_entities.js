Backbone.FacebookModel = Backbone.Model.extend({
	sync: function(method, model, options){
		var deferred = $.Deferred();
		var self = this;
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
				console.log("FacebookModel read: " + fbApiUrl);
				FB.api(fbApiUrl, function(result){
					if (result.error) {
						console.log(result.error);
						options.error(result.error);
						deferred.resolve(result.error);
					} else {
						options.success(result);
						deferred.resolve(self);
					}
				});
			break;
		}
		return deferred.promise();
	}
});

Backbone.FacebookCollection = Backbone.Collection.extend({
	sync: function(method, collection, options){
		var deferred = $.Deferred();
		var self = this;
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
				console.log("FacebookCollection read: " + fbApiUrl);
				FB.api(fbApiUrl, function(result){
					if (result.error) {
						console.log(result.error);
						options.error(result.error);
						deferred.resolve(result.error);
					} else {
						console.log("success!");
						options.success(result.data);
						deferred.resolve(self);
					}
				});
			break;
		}
		return deferred.promise();
	}
});

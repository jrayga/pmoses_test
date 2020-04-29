app.service("MetaService", function () {
    var metaDescription = '';
    var metaKeywords = '';
    return {
        set: function (newMetaDescription, newKeywords) {
            metaKeywords = newKeywords;
            metaDescription = newMetaDescription;
        },
        metaDescription: function () { return metaDescription; },
        metaKeywords: function () { return metaKeywords; }
    }
});
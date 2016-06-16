export default {
    getImagePath: function(imageUrl, version) {
        let baseurl = 'http://psgfe.azurewebsites.net/assets/images/';
        let fileExtension = imageUrl.substring(imageUrl.indexOf('.'));
        return baseurl + imageUrl.replace(fileExtension, "_" + version + fileExtension);
    }
};
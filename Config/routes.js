const LoginController = require('../Controllers/loginController');
const GalleryController = require('../Controllers/galleryController');

const routes = (app) => {
    app.post('/login', LoginController.loginController);
    app.post('/gallery', GalleryController.uploadController);
    app.get('/gallery', GalleryController.galleryController);
    app.delete('/gallery', GalleryController.galleryDeleteController);
};

module.exports = routes;
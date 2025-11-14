/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/admin', controller.admin.home.category);
  router.get('/admin/product', controller.admin.home.product)
  router.get('/admin/subscribe',controller.admin.home.subscribe)
  router.get('/admin/type',controller.admin.home.type)

  router.get('/api/category', controller.categoryController.list)
  router.post('/api/category', controller.categoryController.create);
  router.post('/api/product',controller.productController.create)
  router.get('/api/product',controller.productController.list)

};

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

  router.get('/api/category',controller.categoryController.list)
  router.post('/api/category', controller.categoryController.create);
  router.get('/api/users', controller.user.index);
  router.post('/api/users', controller.user.create);
  router.post('/api/posts', controller.post.create);
  router.get('/api/posts', controller.post.index);
  

  router.get('/api/test',controller.mhn.mhn)
};

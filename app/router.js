/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/admin', controller.admin.home.index);
  router.get('/api/users', controller.user.index);
  router.post('/api/users', controller.user.create);
  router.post('/api/posts', controller.post.create);
  router.get('/api/posts', controller.post.index);
};

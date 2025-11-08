/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/admin', controller.admin.home.index);
  router.get('/users', controller.user.index);
  router.post('/users', controller.user.create);
};

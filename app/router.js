/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, middleware } = app;

  //web route
  router.get("/", controller.home.index);
  router.get("/admin", controller.admin.home.category);
  router.get("/admin/product", controller.admin.home.product);
  router.get("/admin/subscribe", controller.admin.home.subscribe);
  router.post(
    "/product",
    middleware.checkout(),
    controller.productController.create,
  );

  //api route
  router.get(
    "/api/category",
    middleware.checkout(),
    controller.categoryController.list,
  );
  router.post(
    "/api/category",
    middleware.checkout(),
    controller.categoryController.create,
  );

  router.get(
    "/api/product",
    middleware.checkout(),
    controller.productController.list,
  );

  router.get(
    "/api/product/:id",
    middleware.checkout(),
    controller.productController.detail,
  );

  router.post(
    "/api/product/bookmark",
    middleware.checkout(),
    controller.productController.favoriteList,
  );
  router.patch(
    "/api/product",
    middleware.checkout(),
    controller.productController.favorite,
  );

  router.patch(
    "/api/subscribe",
    middleware.checkout(),
    controller.subscribeController.create,
  );

  router.get(
    "/api/subscribe",
    middleware.checkout(),
    controller.subscribeController.listpackage,
  );

  router.post(
    "/api/product/search",
    middleware.checkout(),
    controller.productController.search,
  );
};

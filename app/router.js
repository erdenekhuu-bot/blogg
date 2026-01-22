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
  router.get("/admin/type", controller.admin.home.type);

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

  router.post(
    "/api/product",
    middleware.checkout(),
    controller.productController.create,
  );

  router.get(
    "/api/product",
    middleware.checkout(),
    controller.productController.list,
  );
  router.get(
    "/api/product/bookmark",
    middleware.checkout(),
    controller.productController.favoriteList,
  );
  router.patch(
    "/api/product",
    middleware.checkout(),
    controller.productController.favorite,
  );

  router.get(
    "/api/product/search",
    middleware.checkout(),
    controller.productController.search,
  );
};

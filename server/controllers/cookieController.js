const cookieController = {};

cookieController.setCookie = function (req, res, next) {
  const id = res.locals.newUser._id;
  res.cookie('ssid', id);
  next();
};

module.exports = cookieController;

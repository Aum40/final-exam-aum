export const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({
    message: `the request url:${req.method} ${req.path}not`,
  });
};

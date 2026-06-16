import z, { ZodError } from 'zod';
export const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  //VALIDATION ERROR:400
  //if(err.name === 'zodError')
  if (err.statusCode) {
    res
      .status(err.statusCode)
      .json({ message: err.message, details: err.details });
    return;
  }
  res.status(500).json({ message: err.message });
};

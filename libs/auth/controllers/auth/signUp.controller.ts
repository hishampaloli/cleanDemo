import { Request, Response, NextFunction } from "express";

export = (dependencies: any) => {
  const {
    useCases: { signUp_UseCase },
  } = dependencies;

  const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;

      const addUser = signUp_UseCase(dependencies);
      const response = await addUser.execute({
        name,
        email,
        password,
      });

      console.log(response);

      res.json({ status: true, content: response });
      next();
    } catch (error: any) {
      next(error);
    }
  };
  return signUp;
};

import { Request, Response } from "express";
import User from "../db/user";
import { ELEMENT_ID_DOES_NOT_EXIST, ELEMENT_NOT_FOUND, ELEMENT_TAKEN, SOMETHING_WENT_WRONG } from "../constants/messages.constant";
import { EMAIL, USER } from "../constants/paramsQueries.constant";

export const getUsers = async (req: Request, res: Response) => {
    const users = await User?.findAll({
        where: {
            status: true
        }
      });

      return res.json({
        users
    });
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params; 

    const user = await User?.findOne({
        where: {
            id,
            status: true
        }
    });

    if (!user) {
        return res.status(404).json({
            msg: ELEMENT_ID_DOES_NOT_EXIST(id, USER)
        });
    }

    return res.json({
        user
    });
}

export const postUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const existEmail = await User?.findOne({
            where: {
                email: body.email
            }
        });

        if(existEmail) {
            return res.status(400).json({
                msg: ELEMENT_TAKEN(body.email, EMAIL)
            });
        }

        const user = await User?.create(body);
        return res.json({
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: SOMETHING_WENT_WRONG
        });
    }
}

export const putUser = async (req: Request, res: Response) => {
    const { id } = req.params; 
    const { body } = req;

    try {
        const user = await User?.findOne({
            where: {
                id,
                status: true            
            }
        });

        if(!user) {
            return res.status(400).json({
                msg: ELEMENT_NOT_FOUND(id, USER)
            });
        }

        const existEmail = await User?.findOne({
            where: {
                email: body.email
            }
        });

        if(existEmail && user?.get('email') !== existEmail.get('email')) {
            return res.status(400).json({
                msg: ELEMENT_TAKEN(body.email, EMAIL)
            });
        }

        await user?.update(body);

        return res.json({
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: SOMETHING_WENT_WRONG
        });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params; 

    try {
        const user = await User?.findOne({
            where: {
                id,
                status: true            
            }
        });

        if(!user) {
            return res.status(400).json({
                msg: ELEMENT_NOT_FOUND(id, USER)
            });
        }


        /*await User?.destroy();*/

        await user.update({status: false});

        return res.json({
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: SOMETHING_WENT_WRONG
        });
    }
}
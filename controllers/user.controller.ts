import { Request, Response } from "express";
import User from "../db/user";
import { ELEMENT_ID_DOES_NOT_EXIST } from "../constants/messages.constant";
import { USER } from "../constants/paramsQueries.constant";

export const getUsers = async (req: Request, res: Response) => {
    const users = await User?.findAll({
        where: {
            status: true
        }
      });

    res.json({
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

    res.json({
        user
    });
}

export const postUser = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        body,
        msg: 'postUser'
    });
}

export const putUser = (req: Request, res: Response) => {
    const { id } = req.params; 
    const { body } = req;

    res.json({
        id,
        body,
        msg: 'putUser'
    });
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params; 

    res.json({
        id,
        msg: 'deleteUser'
    });
}
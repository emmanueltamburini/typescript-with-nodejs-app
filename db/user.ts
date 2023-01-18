import { DataTypes } from 'sequelize';
import db from './connection';
import { capitalize } from '../helpers/utils';
import { USER } from '../constants/paramsQueries.constant';

const User = db?.define(capitalize(USER), {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

export default User;
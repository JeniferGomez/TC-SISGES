import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Billing }  from '../interfaces/billing.interface';

export type BillingCreationAttributes = Optional<Billing, 'idbilling' | 'productsBilling' | 'dateBilling' | 'totalBilling' | 'stateBilling' | 'nameClient' | 'descriptionBilling'>;

export class BillingModel extends Model<Billing, BillingCreationAttributes> implements Billing {
    idbilling: number;
    nameClient: string;
    dateBilling: Date;
    productsBilling: number;
    totalBilling: number;
    stateBilling: number;
    descriptionBilling: string;

}

export default function (sequelize: Sequelize): typeof BillingModel {
    BillingModel.init(
        {
            idbilling: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nameClient: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
            dateBilling: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            productsBilling: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            totalBilling: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            stateBilling: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            descriptionBilling: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
        },
        {
            tableName: 'billing',
            sequelize,
            timestamps: false,
        },
    );

    return BillingModel;
}
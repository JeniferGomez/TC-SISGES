import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { TypeBooking } from '@/interfaces/typeBookings.interface';

export type TypeBookingCreationAttributes = Optional<TypeBooking, 'idbooking' | 'booking'>;

export class TypeBookingModel extends Model<TypeBooking, TypeBookingCreationAttributes> implements TypeBooking {
    idbooking: number;
    booking: string;
}

export default function (sequelize: Sequelize): typeof TypeBookingModel {
    TypeBookingModel.init(
        {
            idbooking: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            booking: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
        },
        {
        tableName: 'bookings',
        sequelize, timestamps:false
        },
    );
    
    return TypeBookingModel;
    }

// Path: Server\src\models\typeService.model.ts
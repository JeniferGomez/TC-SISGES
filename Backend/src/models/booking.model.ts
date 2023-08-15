import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Booking } from '@/interfaces/booking.interface';

export type BookingCreationAttributes = Optional<Booking, 'idbooking' | 'typeService' | 'typeBooking' | 'countBeds' | 'dateStart' | 'dateEnd' | 'countChilds' | 'countAdults' | 'observations' | 'nameClient' | 'dniClient' | 'phoneClient' | 'mailClient' | 'stateBooking'>;

export class BookingModel extends Model<Booking, BookingCreationAttributes> implements Booking {
    idbooking: number;
    typeService: number;
    typeBooking: number;
    countBeds: number;
    dateStart: Date;
    dateEnd: Date;
    countChilds: number;
    countAdults: number;
    observations: string;
    nameClient: string;
    dniClient: string;
    phoneClient: string;
    mailClient: string;
    stateBooking: number;

}

export default function (sequelize: Sequelize): typeof BookingModel {
    BookingModel.init(
        {
            idbooking: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            typeService: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            typeBooking: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            countBeds: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            dateStart: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            dateEnd: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            countChilds: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            countAdults: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            observations: {
                allowNull: true,
                type: DataTypes.STRING(45),
            },
            nameClient: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
            dniClient: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
            phoneClient: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
            mailClient: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
            stateBooking: {
                allowNull: false,
                type: DataTypes.INTEGER,
            }
        },
        {
        tableName: 'booking',
        sequelize,
        timestamps: false,
        }
    );
    
    return BookingModel;
}
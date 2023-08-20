import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { TypeService } from '@/interfaces/typeService.interface';

export type TypeServiceCreationAttributes = Optional<TypeService, 'idservice' | 'service'>;

export class TypeServiceModel extends Model<TypeService, TypeServiceCreationAttributes> implements TypeService {
    idservice: number;
    service: string;
}

export default function (sequelize: Sequelize): typeof TypeServiceModel {
    TypeServiceModel.init(
        {
            idservice: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            service: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
        },
        {
        tableName: 'services',
        sequelize, timestamps:false
        },
    );
    
    return TypeServiceModel;
    }

// Path: Server\src\services\typeService.service.ts
import { Dependencies } from '@/interfaces/dependencies.interface';
import { Status } from '@/interfaces/status.interface';
import DB from '@databases';
import { TypeElement } from '@interfaces/typeElements.interface';
import { TypeBooking } from '@/interfaces/typeBookings.interface';
import { TypeService } from '@/interfaces/typeService.interface';


class DropdownService {
    public typeElements = DB.TypeElement;
    public statuses = DB.Statuses;
    public dependencies = DB.Dependencies;
    
    public async findAllTypeElement(): Promise<TypeElement[]> {
        const allTypeElement: TypeElement[] = await this.typeElements.findAll();
        return allTypeElement;
    }

    public async findAllStatuses(): Promise<Status[]> {
        const allStatuses: Status[] = await this.statuses.findAll();
        return allStatuses;
    }

    public async findAllDependencies(): Promise<Dependencies[]> {
        const allDependencies: Dependencies[] = await this.dependencies.findAll();
        return allDependencies;
    }

    public async findAllTypeServices(): Promise<TypeService[]> {    
        const allTypeServices: TypeService[] = await DB.TypeService.findAll();
        return allTypeServices;
    }

    public async findAllTypeBookings(): Promise<TypeBooking[]> {
        const allTypeBookings: TypeBooking[] = await DB.TypeBooking.findAll();
        return allTypeBookings;
    }
}

export default DropdownService;
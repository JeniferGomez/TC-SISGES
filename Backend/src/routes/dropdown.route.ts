import { Router } from 'express';
import DropdownController from '@controllers/typeElement.controller';
import { Routes } from '@interfaces/routes.interface';

class DropdownRoute implements Routes {
    public path = '/dropdowns';
    public router = Router();
    public TypeElementController = new DropdownController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/typeElement`, this.TypeElementController.getTypeElement);
        this.router.get(`${this.path}/statuses`, this.TypeElementController.getStatus);
        this.router.get(`${this.path}/dependencies`, this.TypeElementController.getDependencies);
        this.router.get(`${this.path}/typeService`, this.TypeElementController.getTypeService);
        this.router.get(`${this.path}/typeBooking`, this.TypeElementController.getTypeBooking);
    }
}

export default DropdownRoute;
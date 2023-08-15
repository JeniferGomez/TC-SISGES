import { Router } from 'express';
import BillingController from '../controllers/billing.controller';
import { CreateBillingDto } from '@/dtos/billing.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class BillingsRoute implements Routes {
    public path = '/billings';
    public router = Router();
    public billingController = new BillingController();
    
    constructor() {
        this.initializeRoutes();
    }
    
    private initializeRoutes() {
        this.router.get(`${this.path}`, this.billingController.findAll);
        this.router.get(`${this.path}/:id`, this.billingController.findBillingById);
        this.router.post(`${this.path}`, validationMiddleware(CreateBillingDto, 'body'), this.billingController.create);
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateBillingDto, 'body', true), this.billingController.updateBilling);
        this.router.delete(`${this.path}/:id`, this.billingController.deleteBilling);
        this.router.get(`${this.path}/userById/:id`, this.billingController.findBillingByUserId);
    }
}

export default BillingsRoute;
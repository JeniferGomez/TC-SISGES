import { Router } from 'express';
import BookingController from '@controllers/booking.controller';
import { CreateBookingDto } from '@dtos/booking.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class BookingRoute implements Routes {
    public path = '/booking';
    public router = Router();
    public BookingController = new BookingController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.BookingController.getBooking);
        this.router.get(`${this.path}/:id(\\d+)`, this.BookingController.getBookingById);
        this.router.post(`${this.path}`, validationMiddleware(CreateBookingDto, 'body'), this.BookingController.createBooking);
        this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateBookingDto, 'body', true), this.BookingController.updateBooking);
        this.router.delete(`${this.path}/:id(\\d+)`, this.BookingController.deleteBooking);
    }
}

export default BookingRoute;
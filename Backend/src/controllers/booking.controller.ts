import { NextFunction, Request, Response } from 'express';
import { CreateBookingDto } from '@dtos/booking.dto';
import { Booking } from '@interfaces/booking.interface';
import BookingService from '@services/booking.service';

class BookingController {
    public bookingService = new BookingService();

    public getBooking = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllBookingData: Booking[] = await this.bookingService.findAllBooking();

            res.status(200).json({ data: findAllBookingData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getBookingById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const BookingId = Number(req.params.id);
            const findOneBookingData: Booking = await this.bookingService.findBookingById(BookingId);

            res.status(200).json({ data: findOneBookingData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createBooking = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const BookingData: CreateBookingDto = req.body;

            if(!await this.bookingService.valideBooking(BookingData.dateStart, BookingData.dateEnd, BookingData.typeService, BookingData.typeBooking)){
                const createBookingData: Booking = await this.bookingService.createBooking(BookingData);
                res.status(201).json({ data: createBookingData, message: 'created' });
            }
            else{
                res.status(409).json({ message: 'already exist' });
            }
        } catch (error) {
            next(error);
        }
    };

    public updateBooking = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const BookingId = Number(req.params.id);
            const BookingData: CreateBookingDto = req.body;
            const updateBookingData: Booking = await this.bookingService.updateBooking(BookingId, BookingData);

            res.status(200).json({ data: updateBookingData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const BookingId = Number(req.params.id);
            const deleteBookingData: Booking = await this.bookingService.deleteBooking(BookingId);

            res.status(200).json({ data: deleteBookingData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };
}

export default BookingController;
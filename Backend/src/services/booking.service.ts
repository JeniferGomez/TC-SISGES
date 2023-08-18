import DB from '@databases';
import { CreateBookingDto } from '@dtos/booking.dto';
import { HttpException } from '@exceptions/HttpException';
import { Booking } from '@interfaces/booking.interface';
import { isEmpty } from '@utils/util';

class BookingService {
    public Bookings = DB.Booking;

    public async findAllBooking(): Promise<Booking[]> {
        const allBooking: Booking[] = await this.Bookings.findAll({include: [{all: true}]});
        return allBooking;
    }

    public async findBookingById(BookingId: number): Promise<Booking> {
        if (isEmpty(BookingId)) throw new HttpException(400, "BookingId is empty");

        const findBooking: Booking = await this.Bookings.findByPk(BookingId);
        if (!findBooking) throw new HttpException(409, "Booking doesn't exist");

        return findBooking;
    }
    
    public async valideBooking(startDate: Date, endDate: Date, service: number, bookingType: number): Promise<boolean> {
        if(isEmpty(startDate)) throw new HttpException(400, "startDate is empty");
        if(isEmpty(endDate)) throw new HttpException(400, "endDate is empty");
        if(isEmpty(service)) throw new HttpException(400, "service is empty");
        if(isEmpty(bookingType)) throw new HttpException(400, "bookingType is empty");

        const findBooking: Booking = await this.Bookings.findOne({
            where: {
                dateStart: startDate,
                dateEnd: endDate,
                typeService: service,
                typeBooking: bookingType
            }
        });

        return !!findBooking;
    }

    public async createBooking(BookingData: CreateBookingDto): Promise<Booking> {
        if (isEmpty(BookingData)) throw new HttpException(400, "BookingData is empty");

        const findBooking: Booking = await this.Bookings.findOne({ where : {typeService: BookingData.typeService}});
        if (findBooking) throw new HttpException(409, `Booking already exists`);

        const createBookingData: Booking = await this.Bookings.create({...BookingData});
        return createBookingData;

    }

    public async updateBooking(BookingId: number, BookingData: CreateBookingDto): Promise<Booking> {
        if (isEmpty(BookingData)) throw new HttpException(400, "BookingData is empty");

        const findBooking: Booking = await this.Bookings.findByPk(BookingId);
        if (!findBooking) throw new HttpException(409, "Booking doesn't exist");

        await this.Bookings.update(BookingData, { where: { idbooking    : BookingId } });

        const updateBooking: Booking = await this.Bookings.findByPk(BookingId);
        return updateBooking;
    }

    public async deleteBooking(BookingId: number): Promise<Booking> {
        const findBooking: Booking = await this.Bookings.findByPk(BookingId);
        if (!findBooking) throw new HttpException(409, "Booking doesn't exist");

        await this.Bookings.destroy({ where: { idbooking: BookingId } });

        return findBooking;
    }
}

export default BookingService;
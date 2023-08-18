export interface Booking{
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
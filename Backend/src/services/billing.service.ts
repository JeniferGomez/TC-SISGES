import DB from "@databases";
import { CreateBillingDto } from "@dtos/billing.dto";
import { HttpException } from "@exceptions/HttpException";
import { Billing } from "@interfaces/billing.interface";
import { isEmpty } from "@utils/util";

class BillingService {
    public Billings = DB.Billing;

    public async findAllBilling(): Promise<Billing[]> {
        const allBilling: Billing[] = await this.Billings.findAll({include: [{all: true}]});
        return allBilling;
    }

    public async findBillingById(BillingId: number): Promise<Billing> {
        if (isEmpty(BillingId)) throw new HttpException(400, "BillingId is empty");

        const findBilling: Billing = await this.Billings.findByPk(BillingId);
        if (!findBilling) throw new HttpException(409, "Billing doesn't exist");

        return findBilling;
    }

    public async createBilling(BillingData: CreateBillingDto): Promise<Billing> {
        if (isEmpty(BillingData)) throw new HttpException(400, "BillingData is empty");

        const findBilling: Billing = await this.Billings.findOne({ where : {nameClient: BillingData.nameClient}});
        if (findBilling) throw new HttpException(409, `Billing already exists`);

        const createBillingData: Billing = await this.Billings.create({...BillingData});
        return createBillingData;

    }

    public async updateBilling(BillingId: number, BillingData: CreateBillingDto): Promise<Billing> {
        if (isEmpty(BillingData)) throw new HttpException(400, "BillingData is empty");

        const findBilling: Billing = await this.Billings.findByPk(BillingId);
        if (!findBilling) throw new HttpException(409, "Billing doesn't exist");

        await this.Billings.update(BillingData, { where: { idbilling    : BillingId } });

        const updateBilling: Billing = await this.Billings.findByPk(BillingId);
        return updateBilling;
    }

    public async deleteBilling(BillingId: number): Promise<Billing> {
        if (isEmpty(BillingId)) throw new HttpException(400, "BillingId is empty");

        const findBilling: Billing = await this.Billings.findByPk(BillingId);
        if (!findBilling) throw new HttpException(409, "Billing doesn't exist");

        await this.Billings.destroy({ where: { idbilling    : BillingId } });

        return findBilling;
    }
}

export default BillingService;

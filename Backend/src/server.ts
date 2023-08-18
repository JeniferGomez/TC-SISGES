import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import InventaryRoute from './routes/inventary.route';
import DropdownRoute from './routes/dropdown.route';
import BookingRoute from './routes/booking.route';
import BillingRoute from './routes/billing.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new InventaryRoute(), new DropdownRoute(), new BookingRoute(), new BillingRoute()]);

app.listen();

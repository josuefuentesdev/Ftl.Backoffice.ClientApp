export * from './contactEvents.service';
import { ContactEventsService } from './contactEvents.service';
export * from './contacts.service';
import { ContactsService } from './contacts.service';
export * from './orders.service';
import { OrdersService } from './orders.service';
export * from './weatherForecast.service';
import { WeatherForecastService } from './weatherForecast.service';
export const APIS = [ContactEventsService, ContactsService, OrdersService, WeatherForecastService];

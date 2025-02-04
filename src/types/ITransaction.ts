import { CURRENCY_TYPE } from '@/configs/enum';

export default interface ITransaction {
  id: string;
  order_id: string;
  customer_id: string;
  product_name: string;
  currency: CURRENCY_TYPE;
  amount: number;
  coin_amount: number;
  coin_address: string;
  status: boolean;
  status_time: string;
  create_time: string;
  expire_time: string;
  hash: string;
  merchant_transaction_webhooks: Array<any>;
}

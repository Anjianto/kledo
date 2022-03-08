export interface LoginPayload {
  email: string;
  password: string;
  remember_me?: number;
}

export interface LoginResponse {
  success: boolean;
  data: LoginResponseData;
  message: string;
  time: number;
}

export interface LoginResponseData {
  data: DataData;
  user: User;
  init: Init;
}

export interface DataData {
  access_token: string;
  token_type: string;
  expires_at: string;
}

export interface Init {
  website_id: number;
  endpoint: string;
  user: User;
  lang: Lang[];
  translation: Translation;
  finance: Finance;
  billing: Billing;
  options: Options;
  companies: Company[];
  device_login: DeviceLogin;
  broadcast: any[];
  show_nps: number;
  tutorials: { [key: string]: Tutorial };
  sales: Sale[];
  custom_column_types: ArakGroundhog[];
  custom_columns: any[];
  custom_column_items: any[];
  currencies: WarehouseElement[];
  message_default: MessageDefault;
}

export interface Billing {
  plan: string;
  created_at: string;
  expiry_date: null;
  can_be_upgraded: boolean;
  can_be_renewed: boolean;
  can_be_addoned: boolean;
  hidden_feature: any[];
  hidden_feature_elite: any[];
  max_users: number;
  max_warehouses: number;
  max_marketplaces: number;
  max_bank: number;
  max_tax: number;
  plan_id: number;
  addons: any[];
}

export interface Company {
  company_id: number;
  website_id: number;
  name: string;
  endpoint: string;
  logo: string;
  last_login: null | string;
  created_at: string;
}

export interface WarehouseElement {
  id: number;
  code: string;
  symbol?: string;
  name: string;
  is_archive?: number;
}

export interface ArakGroundhog {
  id: number;
  name: string;
}

export interface DeviceLogin {
  device_id: number;
  device_name: string;
}

export interface Finance {
  expenseTerms: ExpenseTerm[];
  taxes: TaxElement[];
  units: ArakGroundhog[];
  shippingComps: ExpenseTerm[];
  productCategories: ExpenseTerm[];
  config: Config;
  dashboard: FinanceDashboard[];
  warehouses: WarehouseElement[];
  accountCategories: AccountCategory[];
  bankAccounts: BankAccount[];
}

export interface AccountCategory {
  id: number;
  name: string;
  debit_normal_account: number;
}

export interface BankAccount {
  id: number;
  name: string;
  ref_code: string;
  finance_account_category_id: number;
  is_locked: number;
  parent_id: number | null;
  is_parent: number;
  currency_id: number | null;
  dashboard_id: number;
  is_deletable: boolean;
  is_currency_editable: number;
  balance?: number;
}

export interface Config {
  budget: BankTransfer;
  witholding: Witholding;
  tax: ConfigTax;
  contact: Contact;
  expense: Expense;
  bank_spend: Bank;
  bank_receive: Bank;
  bank_transfer: BankTransfer;
  manual_journal: CreditMemo;
  credit_memo: CreditMemo;
  debit_memo: CreditMemo;
  product: Product;
  fixed_asset: FixedAsset;
  stock_adjustment: BankTransfer;
  expense_status: ArakGroundhog[];
  purchaseorder_status: ArakGroundhog[];
  purchaseinvoice_status: ArakGroundhog[];
  purchasequote_status: ArakGroundhog[];
  purchasedelivery_status: ArakGroundhog[];
  quote_status: ArakGroundhog[];
  order_status: ArakGroundhog[];
  delivery_status: ArakGroundhog[];
  return_status: ArakGroundhog[];
  purchase_return_status: ArakGroundhog[];
  invoice_status: ArakGroundhog[];
  tax_status: any[];
  credit_memo_status: ArakGroundhog[];
  debit_memo_status: ArakGroundhog[];
  bank_tran_status: ArakGroundhog[];
  fixed_asset_status: ArakGroundhog[];
  contact_type: ArakGroundhog[];
  stock_adjustment_type: ArakGroundhog[];
  trans_type: ArakGroundhog[];
  depreciation_method: ArakGroundhog[];
  closing: Closing;
  custom_column: CustomColumn;
  custom_column_item: CustomColumn;
}

export interface Bank {
  from_account: FromAccount;
  item_account: Account;
}

export interface FromAccount {
  default: number;
  cat_id: number[];
  default_name: string;
  default_ref_code: string;
  default_currency_id: null;
}

export interface Account {
  default: number;
  cat_id: number[];
}

export interface BankTransfer {
  account: FromAccount;
}

export interface Closing {
  tax_expense_account: FromAccount;
  tax_payable_account: FromAccount;
  retained_earnings_account: FromAccount;
}

export interface Contact {
  receivable_contact: FromAccount;
  payable_account: FromAccount;
}

export interface CreditMemo {
  item_account: Account;
}

export interface CustomColumn {
  limit: number;
}

export interface Expense {
  pay_from_account: FromAccount;
  expense_account: Account;
}

export interface FixedAsset {
  fixed_asset_account: FromAccount;
  credited_account: Account;
  accumulated_depreciation_account: Account;
  depreciation_expense_account: Account;
  dispose_deposit_account: Account;
  dispose_loss_gain_account: Account;
}

export interface Product {
  purchase_account: FromAccount;
  sell_account: FromAccount;
  track_account: FromAccount;
  bundle_account: Account;
}

export interface ConfigTax {
  sell_tax_account: FromAccount;
  buy_tax_account: FromAccount;
}

export interface Witholding {
  account: Account;
}

export interface FinanceDashboard {
  id: number;
  title: string;
  subtitle: string;
  type: string;
  type_id: number | null;
  is_active: boolean;
  cache: string;
}

export interface ExpenseTerm {
  id: number;
  name: string;
  days?: number;
  is_active: boolean;
  pos_id?: null;
}

export interface TaxElement {
  id: number;
  name: string;
  percent: number;
  is_witholding: number;
  sell_account_id: number;
  buy_account_id: number;
  is_active: boolean;
  is_allow_manual: number;
  sell_account: BuyAccountClass;
  buy_account: BuyAccountClass;
}

export interface BuyAccountClass {
  id: number;
  name: string;
  ref_code: string;
  currency_id: null;
  parent_id: null;
  is_parent: number;
}

export interface Lang {
  value: string;
  name: string;
}

export interface MessageDefault {
  default_message_template_invoice: string;
  default_message_template_delivery: string;
  default_message_template_order: string;
  default_message_template_quote: string;
  default_message_template_purchase_invoice: string;
  default_message_template_purchase_delivery: string;
  default_message_template_purchase_order: string;
  default_message_template_purchase_quote: string;
}

export interface Options {
  property_name: string;
  property_timezone: string;
  property_logo: string;
  property_language: string;
  property_date_format: string;
  property_time_format: string;
  property_currency_format: string;
  country_tax_identifier_name: string;
  property_currency: string;
  property_currency_id: number;
  property_currency_symbol: string;
  property_address: string;
  property_address_delivery: null;
  property_phone: string;
  property_email: string;
  property_decimal: null;
  demo: number;
  lock_date: null;
  purchase_discount: number;
  invoice_discount: number;
  consolidation_active: null;
  tax_manual_active: null;
  invoice_delivery: number;
  invoice_order: number;
  invoice_quote: number;
  invoice_dp: number;
  invoice_stock_must_enough: number;
  invoice_show_reference: null;
  invoice_show_tag: null;
  invoice_show_delivery_information: null;
  invoice_form_show_reference: number;
  invoice_form_show_tag: number;
  invoice_form_show_delivery_information: number;
  sale_from_quote_locked: null;
  purchase_from_quote_locked: null;
  product_base_price_from_latest_purchase_price: null;
  auto_number_follow_parent: null;
  order_stock_must_enough: null;
  delivery_stock_must_enough: null;
  invoice_stock_show: number;
  invoice_stock_per_warehouse: number;
  product_conv_stock_must_enough: null;
  purchase_delivery: number;
  purchase_order: number;
  purchase_quote: number;
  purchase_dp: number;
  purchase_show_reference: null;
  purchase_show_tag: null;
  purchase_show_delivery_information: null;
  purchase_form_show_reference: number;
  purchase_form_show_tag: number;
  purchase_form_show_delivery_information: number;
  bank_reconcile: null;
  product_default_inventory: number;
  onboarding: number;
  meeting: number;
  email_confirmed: number;
  setup_button: number;
  reply_email_address: string;
  product_tour_dashboard: null;
  sale_discount_numeric: null;
  purchase_discount_numeric: null;
  sale_price_disabled: null;
  purchase_price_disabled: null;
  sale_include_tax: null;
  purchase_include_tax: null;
  sales_person: number;
  tutorial_accounts: null;
  tutorial_add_contact: null;
  tutorial_add_delivery: null;
  tutorial_add_expense: null;
  tutorial_add_fixed_asset: null;
  tutorial_add_invoice: null;
  tutorial_add_manual_journal: null;
  tutorial_add_product_conversion: null;
  tutorial_add_product_manufacture: null;
  tutorial_add_product_package: null;
  tutorial_add_product: null;
  tutorial_add_purchase_invoice: null;
  tutorial_add_purchase_order: null;
  tutorial_add_quote: null;
  tutorial_add_receive_money: null;
  tutorial_add_stockadjustment: null;
  tutorial_add_transfer_money: null;
  tutorial_add_warehouse_transfer_in: null;
  tutorial_add_warehouse_transfer_out: null;
  tutorial_cash_bank: null;
  tutorial_contacts: null;
  tutorial_conversion_balance: null;
  tutorial_detail_inventory: null;
  tutorial_expenses: null;
  tutorial_fixed_assets: null;
  tutorial_inventory: null;
  tutorial_layout_invoice: null;
  tutorial_purchases: null;
  tutorial_quotes: null;
  tutorial_sales: null;
  tutorial_balance_sheet_report: null;
  tutorial_profit_loss_report: null;
  tutorial_cash_flow_report: null;
  tutorial_inventory_summary_report: null;
  tutorial_inventory_stock_movement_report: null;
  tutorial_warehouse_stock_summary_report: null;
  tutorial_warehouse_stock_movement_report: null;
  tutorial_sales_tax_report: null;
  tutorial_executive_summary_report: null;
  tutorial_customer_invoice_report: null;
  tutorial_aged_payable_report: null;
  tutorial_general_ledger_report: null;
  tutorial_bank_summary_report: null;
  tutorial_witholding_tax_report: null;
  tutorial_supplier_invoice_report: null;
  tutorial_trial_balance_report: null;
  tutorial_journal_report: null;
  tutorial_purchases_per_vendor_report: null;
  tutorial_income_per_customer_report: null;
  tutorial_aged_receivable_report: null;
  tutorial_expense_claim_report: null;
  tutorial_purchases_per_product_report: null;
  tutorial_sales_per_product_report: null;
  tutorial_fixed_asset_detail_report: null;
  tutorial_fixed_asset_summary_report: null;
  tutorial_expense_per_contact_report: null;
  tutorial_closing_book: null;
  tutorial_add_unit_convertion: null;
  tutorial_tags: null;
  tutorial_deliveries: null;
  tutorial_stock_adjustment_import: null;
  tutorial_manual_journal_import: null;
  tutorial_expense_import: null;
  tutorial_account_import: null;
  tutorial_contact_import: null;
  tutorial_fixed_asset_import: null;
  tutorial_invoice_status_import: null;
  tutorial_invoice_import: null;
  tutorial_purchase_invoice_import: null;
  tutorial_purchase_invoices: null;
  tutorial_invoices: null;
  tutorial_products: null;
  tutorial_bank_reconciliation: null;
  tutorial_run_depreciation: null;
  tutorial_cash_bank_transactions: null;
  show_columns_finance_invoices: null;
  show_columns_finance_deliveries: null;
  show_columns_finance_orders: string;
  show_columns_finance_quotes: null;
  show_columns_finance_purchaseInvoices: null;
  show_columns_finance_purchaseDeliveries: null;
  show_columns_finance_purchaseOrders: null;
  show_columns_finance_purchaseQuotes: null;
  show_columns_finance_expenses: null;
  product_buffer_qty: null;
  sales_person_incentive: null;
  multi_currency: number;
  reference_multiline: null;
  currency: OptionsCurrency[];
  chat_support: number;
  chat_number: string;
}

export interface OptionsCurrency {
  id: number;
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
}

export interface Sale {
  id: number;
  name: string;
  email: string;
}

export interface Translation {
  menu: { [key: string]: string };
  reportmenu: { [key: string]: string };
}

export interface Tutorial {
  name: string;
  video_id: string;
  article: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  is_active: boolean;
  lang: string;
  token_validation: null;
  token_website_id: number;
  profile_image: string;
  permissions: Permission[];
  menus: Menus;
  role_id?: number;
}

export interface Menus {
  dashboard: MenusDashboard[];
  settings: Setting[];
}

export interface MenusDashboard {
  title: string;
  url: string;
  icon?: string;
  name?: string;
  divider?: boolean;
  sub?: Setting[];
}

export interface Setting {
  title: string;
  permission?: string;
  url: string;
  icon?: string;
  name: string;
  group_id?: number;
}

export interface Permission {
  id: number;
  name: string;
  parent_id: number | null;
  is_parent: number | null;
  position: number;
  child?: any[] | { [key: string]: Permission };
}

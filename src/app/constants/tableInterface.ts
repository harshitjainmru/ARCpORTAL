export interface TableColumn {
  heading: string;
  key: string;
  sort?: boolean;
  type: string;
  link:string
  align?: 'right' | 'left' | 'center';
}
export interface clientTable{
  clientId: number,
  fName: string,
  mName: string,
  lName: string,
  email: string,
  number: number,
  caseStatus: number,
  status:string
}
export interface dashboardTable{
  sno:number,
  fName: string,
  mName: string,
  lName: string,
  email: string,
  phone: number,
  registeredOn:string
}
export interface staffTable{
  sno:number,
  fName: string,
  lName: string,
  email: string,
  status: string,

}
export interface clientDetailTable{
  sno:number,
  transactionId: string,
  Amount: string,
  dateTime: string,

}
export interface notificationTable{
  title:string
  sno:number,
  description: string,
  sentOn: string,
  status: string,

}
export interface earningTable{
  sno:number,
  userID:number,
  fName: string,
  lName: string,
  email: string,
  number: number,
  transactionStatus:string,
  amountPaid:string
  status:string
}
export interface transactionTable{
  sno:number,
  transactionID:number,
  fName: string,
  lName: string,
  dateOfPayment: string,
  status:string
  amountPaid:string
}

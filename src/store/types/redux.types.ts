import {IUserDetails} from '../../utils/types';

export interface IinitialStateApp {
  langType: 'en' | 'ar';
}

export interface IinitialStateUser {
  userDetails: IUserDetails;
  token: string;
}

import {TextInputProps} from 'react-native';
import {UseControllerProps} from 'react-hook-form';

export type FormValues = {
  fullname: string;
  mobileNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export interface ControlledFieldProps
  extends UseControllerProps,
    TextInputProps {
  control: any;
  placeholder?: string;
  name: keyof FormValues;
  defaultValue?: string;
}

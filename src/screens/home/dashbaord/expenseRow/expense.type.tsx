import Icon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { moderateScale } from '../../../../utils/appUtils';
import { Colors } from '../../../../theme/colors';
import { ExpenseEnums } from '../../../../utils/types';

export const getIconByExpenseType = (expenseType: ExpenseEnums) => {
  switch (expenseType) {
    case ExpenseEnums.CREDIT:
      return (
        <Icon name={'credit-card'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.DONATIONS:
      return (
        <Icon name={'heart'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.GROCERIES:
      return (
        <Icon name={'shopping-cart'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.MEDICAL:
      return (
        <MaterialIcon name={'local-hospital'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.OUTING:
      return (
        <Icon name={'coffee'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.PERSONAL_CARE:
      return (
        <AntDesignIcon name={'smileo'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.RENT:
      return (
        <Icon name={'home'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.SHOPPING:
      return (
        <Icon name={'shopping-bag'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.SUBSCRIPTIONS:
      return (
        <AntDesignIcon name={'team'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.TRANSPORTATIONS:
      return (
        <IonIcon name={'md-car-outline'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.UTILITIES:
      return (
        <Icon name={'box'} size={moderateScale(20)} color={Colors.primary} />
      );
    case ExpenseEnums.VACATION:
      return (
        <IonIcon name={'airplane-outline'} size={moderateScale(20)} color={Colors.primary} />
      );
    default:
      return (
        <AntDesignIcon name={'plus'} size={moderateScale(20)} color={Colors.primary} />
      );
  }
};

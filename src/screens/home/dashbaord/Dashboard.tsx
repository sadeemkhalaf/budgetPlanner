import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { t } from 'i18next';
import Icon from 'react-native-vector-icons/Feather';
import { CustomPopupModal, CustomText, Gap, LogoHeader, Screen } from '../../../components';
import { scaleByHeight, scaleByWidth } from '../../../utils/appUtils';
import { ExpensesList } from './expensesList/ExpensesList';
import { ExpenseDetails } from './expensesList/expensesList.props';
import { commonStyles } from '../../../theme/commonStyles';
import { Colors } from '../../../theme/colors';
import { AddNewModalContent } from './AddNewModalContent';
import { setUserExpenses } from '../../../store/actions/userActions';

const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const [expensesModalVisible, setExpensesModalVisible] = useState<boolean>(false);

  const onSubmitAddNew = (data: ExpenseDetails) => {
    if (data.amount > 0 && data.title.length) {
      dispatch(setUserExpenses({ ...data, id: (Math.random() * 900).toString() }));
      setExpensesModalVisible(false);
    }
  };

  return (
    <Screen
      unsafe
      preset={'fixed'}
      style={{ paddingHorizontal: scaleByWidth(30) }}
    >
      <Gap type={'col'} gapValue={64} />
      <LogoHeader />
      <Gap type={'col'} gapValue={32} />
      <View style={[commonStyles.flex, commonStyles.row, commonStyles.spaceBetween]}>
        <CustomText text={t('Dashboard.expenses')!} preset={'headerBold'} />
        <TouchableOpacity style={[commonStyles.flex, commonStyles.row]} onPress={() => setExpensesModalVisible(true)}>
          <CustomText text={t('Dashboard.new')!} preset={'bold'} style={{ color: Colors.primary }} />
          <Icon name={'plus'} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <Gap type={'col'} gapValue={16} />

      <ExpensesList />

      {/* Add New modal */}
      <CustomPopupModal
        height={scaleByHeight(340)}
        visible={expensesModalVisible}
        onModalClose={() => setExpensesModalVisible(false)}>
        <AddNewModalContent onSubmitAddNew={onSubmitAddNew} />
      </CustomPopupModal>
    </Screen>
  );
};

export default Dashboard;

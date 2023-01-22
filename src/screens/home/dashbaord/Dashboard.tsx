import React, { FC, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { t } from 'i18next';
import Icon from 'react-native-vector-icons/Feather';
import { useForm } from 'react-hook-form';
import { CustomPopupModal, CustomText, Gap, LogoHeader, Screen } from '../../../components';
import { moderateScale, scaleByHeight, scaleByWidth } from '../../../utils/appUtils';
import { ExpensesList } from './expensesList/ExpensesList';
import { ExpenseDetails, testData } from './expensesList/expensesList.props';
import { commonStyles } from '../../../theme/commonStyles';
import { Colors } from '../../../theme/colors';
import { ExpenseEnums } from './expenseRow/expense.type';

const Dashboard: FC = () => {
  const [expensesList, setExpensesList] = useState<ExpenseDetails[]>([]);
  const [expensesModalVisible, setExpensesModalVisible] = useState<boolean>(false);

  const { control, handleSubmit, formState: { errors }, getValues } = useForm<ExpenseDetails>({
    defaultValues: {
      amount: 0,
      createdOn: new Date().toISOString(),
      title: ExpenseEnums.OTHER
    }
  });

  const handleCreateNew = () => {}

  const onSubmit = (data: ExpenseDetails) => {
    handleCreateNew();
  };


  useEffect(() => {
    setExpensesList(testData);
  }, [])

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
          <CustomText text={'New'} preset={'bold'} style={{ color: Colors.primary }} />
          <Icon name={'plus'} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <Gap type={'col'} gapValue={16} />
      <ExpensesList expensesList={expensesList} />

      {/* type selection */}
      <CustomPopupModal height={scaleByHeight(340)} visible={expensesModalVisible} onModalClose={() => setExpensesModalVisible(false)}>
        <View style={[commonStyles.flex, { padding: moderateScale(24) }]}>
          <CustomText text={t('Dashboard.add-new')!} preset={'subheaderBold'} style={{ color: Colors.black }} />
        </View>
      </CustomPopupModal>
    </Screen>
  );
};

export default Dashboard;

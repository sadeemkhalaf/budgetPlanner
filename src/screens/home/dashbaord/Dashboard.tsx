import React, { FC, useCallback, useState } from 'react';
import { View } from 'react-native';
import { t } from 'i18next';
import Icon from 'react-native-vector-icons/Feather';
import { CustomText, CustomTextField, Gap, Screen } from '../../../components';
import { moderateScale, scaleByWidth } from '../../../utils/appUtils';
import { Colors } from '../../../theme/colors';
import { ExpensesList } from './expensesList/ExpensesList';
import { commonStyles } from '../../../theme/commonStyles';
import { styles } from './styles';
import { ExpenseDetails, testData } from './expensesList/expensesList.props';

const Dashboard: FC = () => {
  const [searchTxt, setSearchTxt] = useState<string>('');
  const [expensesList, setExpensesList] = useState<ExpenseDetails[]>(testData);
  const [tempExpensesList, setTempExpensesList] = useState<ExpenseDetails[]>(testData);


  const filteredExpensesList = (text: string) => {
    const filtered = expensesList!.filter((item: ExpenseDetails) => {
      return item?.title.toLowerCase()?.includes(text?.toLowerCase());
    });

    setTempExpensesList(filtered);
  };

  const renderSearchInput = useCallback(() => {
    return (
      <CustomTextField
        clearButtonMode={'while-editing'}
        inputStyle={{ borderBottomWidth: 0 }}
        style={[commonStyles.flex1, styles.searchbox]}
        value={searchTxt}
        onChangeText={(text: string) => {
          setSearchTxt(text);
          filteredExpensesList(text);
        }} />
    );
  }, [searchTxt, filteredExpensesList]);

  return (
    <Screen
      unsafe
      preset={'scroll'}
      style={{ paddingHorizontal: scaleByWidth(30) }}
    >
      <Gap type={'col'} gapValue={64} />
      <CustomText text={t('Dashboard.expenses')!} preset={'headerBold'} />
      <Gap type={'col'} gapValue={16} />
      <View style={[commonStyles.flex, commonStyles.row]}>
        <Icon
          name={'search'}
          size={moderateScale(20)}
          color={Colors.grey}
          style={[styles.absoluteIcon]} />
        {renderSearchInput()}
      </View>
      <Gap type={'col'} gapValue={16} />
      <ExpensesList expensesList={tempExpensesList} />
    </Screen>
  );
};

export default Dashboard;

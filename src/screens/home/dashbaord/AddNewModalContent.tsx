import { View, Text } from "react-native";
import React, { FC, useState } from "react";
import { t } from "i18next";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Feather";
import { CustomText, Gap, CustomTextField, CustomButton } from "../../../components";
import { arabicToEnglishNumbers, moderateScale } from "../../../utils/appUtils";
import { ExpenseEnums } from "./expenseRow/expense.type";
import { ExpenseDetails } from "./expensesList/expensesList.props";
import { Colors } from "../../../theme/colors";
import { commonStyles } from "../../../theme/commonStyles";

export const AddNewModalContent: FC<{ onSubmitAddNew: (data: ExpenseDetails) => void }> = ({ onSubmitAddNew }) => {
    const [expenseType, setExpenseType] = useState<ExpenseEnums>(ExpenseEnums.OTHER);
    const [expenseAmount, setExpenseAmount] = useState<string>('0');
    const expensesKeys = Object.keys(ExpenseEnums);

    return (
        <View style={[{ paddingVertical: moderateScale(24) }, commonStyles.w100, commonStyles.flex1, commonStyles.spaceBetween]}>
            <View style={[commonStyles.w100, commonStyles.alignItems]}>
                <CustomText text={t('Dashboard.add-new')!} preset={'subheaderBold'} style={{ color: Colors.black }} />
                <Gap type={'col'} gapValue={24} />
                <CustomText text={t('Dashboard.add-new')!} preset={'fieldLabel'} style={{ color: Colors.black }} />
                <SelectDropdown
                    renderDropdownIcon={() => <Icon name={'chevron-down'} />}
                    data={expensesKeys}
                    onChangeSearchInputText={() => {}}
                    defaultButtonText={t('Dashboard.select-type')!}
                    onSelect={(selectedItem: string) => {
                        // @ts-ignore
                        setExpenseType(ExpenseEnums[selectedItem]);
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        // @ts-ignore
                        return t(`ExpensesTypes.${ExpenseEnums[selectedItem]}`);
                    }}
                    rowTextForSelection={(item: string) => {
                        // @ts-ignore
                        return t(`ExpensesTypes.${ExpenseEnums[item]}`);
                    }}
                />
                <Gap type={'col'} gapValue={24} />
                <CustomText text={t('Dashboard.amount')!} preset={'fieldLabel'} style={{ color: Colors.black }} />
                <CustomTextField placeholder={t('Dashboard.amount')!}
                    style={[commonStyles.w75]}
                    value={expenseAmount}
                    textAlign={'center'}
                    onChangeText={(text) => setExpenseAmount(arabicToEnglishNumbers(text))}
                />
            </View>
            <CustomButton
                text={t('More.confirm')!}
                onPress={() => onSubmitAddNew({ amount: Number(expenseAmount), createdOn: new Date().toISOString(), title: expenseType })} />
        </View>
    );
};

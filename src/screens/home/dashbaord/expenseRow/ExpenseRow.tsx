import React, { FC, Fragment } from 'react'
import { View } from 'react-native'
import { t } from 'i18next'
import { CustomText, Gap } from '../../../../components'
import { getIconByExpenseType, ExpenseEnums } from './expense.type'
import { Colors } from '../../../../theme/colors'
import { commonStyles } from '../../../../theme/commonStyles'
import { styles } from '../styles'
import { ExpenseDetails } from '../expensesList/expensesList.props'

export const ExpenseRow: FC<{ expenseDetail: ExpenseDetails }> = ({ expenseDetail: { amount, title, id, createdOn } }) => {

    return (
        <Fragment>
            <View style={[commonStyles.row, commonStyles.spaceBetween, styles.expenseRow]}>
                <View style={[commonStyles.row]} >
                    {getIconByExpenseType(title)}
                    <Gap type={'row'} gapValue={8} />
                    <CustomText text={t(`ExpensesTypes.${title}`)!} style={{ color: Colors.black, textTransform: 'capitalize' }} />
                </View>
                <CustomText text={t('Dashboard.jod', { amount: amount })!} preset={'bold'} style={{ color: Colors.green }} />
            </View>
            <Gap type='col' gapValue={12} />
        </Fragment>
    )
}

import React, { FC } from 'react'
import { View } from 'react-native'
import { CustomText, Gap } from '../../../../components'
import { Colors } from '../../../../theme/colors'
import { commonStyles } from '../../../../theme/commonStyles'
import { ExpenseRow } from '../expenseRow/ExpenseRow'
import { ExpensesListProps } from './expensesList.props'


export const ExpensesList: FC<ExpensesListProps> = ({ expensesList }) => {
    // 
    const groupByDate = () => {}
    return (
        <View>
            <View style={[commonStyles.flex, commonStyles.row, commonStyles.spaceBetween]}>
                <CustomText text={'Nov 8'} preset={'subheaderBold'} />
                <CustomText text={'43 JOD'} style={{ color: Colors.purple }} preset={'bold'} />
            </View>
            <Gap type='col' gapValue={16} />
            {expensesList?.map((item, idx) => <ExpenseRow key={idx} expenseDetail={item} />)}

        </View>
    )
}

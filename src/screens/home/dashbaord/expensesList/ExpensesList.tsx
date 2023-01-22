import React, { FC, Fragment, useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl, View } from 'react-native'
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { t } from 'i18next';
import _ from 'lodash';
import { CustomText, CustomTextField, Gap } from '../../../../components'
import { Colors } from '../../../../theme/colors'
import { commonStyles } from '../../../../theme/commonStyles'
import { ExpenseRow } from '../expenseRow/ExpenseRow'
import { ExpenseDetails, ExpensesListProps } from './expensesList.props'
import { formatDateKeyByLang, moderateScale } from '../../../../utils/appUtils';
import { IRootState } from '../../../../store/storeConfigs';
import { styles } from '../styles';


export const ExpensesList: FC<ExpensesListProps> = ({ expensesList }) => {
    const { langType } = useSelector((state: IRootState) => state.App)
    const [searchTxt, setSearchTxt] = useState<string>('');
    const [tempExpensesList, setTempExpensesList] = useState<ExpenseDetails[]>(expensesList);
    const [groupedActivitiesKeys, setGroupedActivitiesKeys] = useState<any>([]);
    const [groupedActivities, setGroupedActivities] = useState<any>([]);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    const groupByDate = () => {
        const groupedByDate = _.groupBy(tempExpensesList, (dates) => formatDateKeyByLang(dates?.createdOn, langType))
        const resultKeys = (Object.keys(groupedByDate) as (keyof typeof groupedByDate)[]);
        setGroupedActivities(groupedByDate)
        setGroupedActivitiesKeys(resultKeys)
    }

    const filteredExpensesList = (text: string) => {
        if (text.length >= 3) {
            const filtered = expensesList!.filter((item: ExpenseDetails) => {
                return item?.title.toLowerCase()?.includes(text?.toLowerCase());
            });

            setTempExpensesList(filtered);
        } else setTempExpensesList(expensesList)

        groupByDate();
    };

    const renderSearchInput = useCallback(() => {
        const handleSearch = (text: string) => {
            filteredExpensesList(text);
            setSearchTxt(text);
        }

        return (
            <CustomTextField
                clearButtonMode={'while-editing'}
                placeholder={t('Dashboard.search')!}
                inputStyle={{ borderBottomWidth: 0 }}
                style={[commonStyles.flex1, styles.searchbox]}
                value={searchTxt}
                onChangeText={handleSearch} />
        );
    }, [searchTxt, filteredExpensesList]);


    useEffect(() => {
        // on mounted
        setTempExpensesList(expensesList)
        groupByDate();

    }, [expensesList, tempExpensesList])

    return (
        <View style={[commonStyles.flex1]}>
            <View style={[commonStyles.flex, commonStyles.row]}>
                <Icon
                    name={'search'}
                    size={moderateScale(20)}
                    color={Colors.grey}
                    style={[styles.absoluteIcon]} />
                {renderSearchInput()}
            </View>
            <Gap type={'col'} gapValue={32} />
            <FlatList
                data={groupedActivitiesKeys}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                renderItem={({ item }) => {
                    const totalSpendings = groupedActivities[item].reduce((accumulator: number, currentValue: ExpenseDetails) => accumulator + currentValue?.amount, 0);
                    return (<Fragment>
                        <View style={[commonStyles.flex, commonStyles.row, commonStyles.spaceBetween]}>
                            <CustomText text={item} preset={'bold'} />
                            <CustomText
                                // text={'6 JOD'}
                                text={t('Dashboard.jod', { amount: totalSpendings })!}
                                style={{ color: Colors.purple }} preset={'bold'} />
                        </View>
                        <Gap type='col' gapValue={16} />
                        {groupedActivities[item]?.map((activity: any, key: number) => (
                            <ExpenseRow key={key} expenseDetail={activity} />
                        ))}
                        <Gap type={'col'} gapValue={24} />
                    </Fragment>)
                }}
                keyExtractor={item => item}
            />

            {/* {groupedActivitiesKeys.length > 0 ? groupedActivitiesKeys?.map((key: string, index: number) => {
                const totalSpendings = groupedActivities[key].reduce((accumulator: number, currentValue: ExpenseDetails) => accumulator + currentValue?.amount, 0);
                return (<Fragment key={index}>
                    <View style={[commonStyles.flex, commonStyles.row, commonStyles.spaceBetween]}>
                        <CustomText text={key} preset={'bold'} />
                        <CustomText
                            // text={'6 JOD'}
                            text={t('Dashboard.jod', { amount: totalSpendings })!}
                            style={{ color: Colors.purple }} preset={'bold'} />
                    </View>
                    <Gap type='col' gapValue={16} />
                    {groupedActivities[key]?.map((activity: any, key: number) => (
                        <ExpenseRow key={key} expenseDetail={activity} />
                    ))}
                    <Gap type={'col'} gapValue={24} />
                </Fragment>)
            }) : null} */}
        </View>
    )
}

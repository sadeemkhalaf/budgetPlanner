import React, { FC, Fragment, useCallback, useLayoutEffect, useState } from 'react'
import { FlatList, RefreshControl, View } from 'react-native'
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { t } from 'i18next';
import _ from 'lodash';
import { CustomText, CustomTextField, Gap } from '../../../../components'
import { Colors } from '../../../../theme/colors'
import { commonStyles } from '../../../../theme/commonStyles'
import { ExpenseRow } from '../expenseRow/ExpenseRow'
import { formatDateKeyByLang, moderateScale } from '../../../../utils/appUtils';
import { IRootState } from '../../../../store/storeConfigs';
import { ExpenseDetails } from '../../../../utils/types';
import { styles } from '../styles';


export const ExpensesList: FC = () => {
    const { userExpensesList } = useSelector((state: IRootState) => state.User);
    const { langType } = useSelector((state: IRootState) => state.App);

    const [searchTxt, setSearchTxt] = useState<string>('');
    const [tempExpensesList, setTempExpensesList] = useState<ExpenseDetails[]>(userExpensesList);
    const [groupedActivitiesKeys, setGroupedActivitiesKeys] = useState<any>([]);
    const [groupedActivities, setGroupedActivities] = useState<any>([]);
    const [refreshing, setRefreshing] = useState(false);

    const groupByDate = () => {
        const groupedByDate = _.groupBy(tempExpensesList, (dates) => formatDateKeyByLang(dates?.createdOn, langType))
        const resultKeys = (Object.keys(groupedByDate) as (keyof typeof groupedByDate)[]);
        setGroupedActivities(groupedByDate)
        setGroupedActivitiesKeys(resultKeys)
    }

    const filteredExpensesList = (text: string) => {
        if (text.length >= 3) {
            const filtered = userExpensesList!.filter((item: ExpenseDetails) => {
                return t(`ExpensesTypes.${item?.title}`).toLowerCase()?.includes(text?.toLowerCase());
            });
            setTempExpensesList(filtered);
        } else setTempExpensesList(userExpensesList)
        groupByDate();
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTempExpensesList(userExpensesList)
        groupByDate();
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const renderSearchInput = useCallback(() => {
        const handleSearch = (text: string) => {
            filteredExpensesList(text);
            setSearchTxt(text);
        }

        return (
            <CustomTextField
                placeholder={t('Dashboard.search')!}
                inputStyle={{ borderBottomWidth: 0, textAlign: 'left' }}
                style={[commonStyles.flex1, styles.searchbox]}
                value={searchTxt}
                onChangeText={handleSearch} />
        );
    }, [searchTxt, filteredExpensesList]);


    useLayoutEffect(() => {
        setTempExpensesList(userExpensesList)
        groupByDate();
    }, [userExpensesList, refreshing])

    return (
        <View style={[commonStyles.flex1]}>
            <View style={[commonStyles.flex, commonStyles.row, { direction: 'ltr' }]}>
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
                ListEmptyComponent={() =>
                    <View style={[commonStyles.flex, commonStyles.column, commonStyles.alignItems]}>
                        <Icon
                            name={'meh'}
                            size={moderateScale(40)}
                            color={Colors.primary} />
                        <Gap type={'col'} gapValue={16} />
                        <CustomText style={[{ textAlign: 'center' }]} text={t('Dashboard.empty-list-state')!} />
                    </View>
                }
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                renderItem={({ item }) => {
                    const totalSpendings = groupedActivities[item].reduce((accumulator: number, currentValue: ExpenseDetails) => accumulator + currentValue?.amount, 0);
                    return (<Fragment>
                        <View style={[commonStyles.flex, commonStyles.row, commonStyles.spaceBetween]}>
                            <CustomText text={item} preset={'bold'} />
                            <CustomText
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
        </View>
    )
}

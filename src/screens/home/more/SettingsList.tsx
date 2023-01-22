import { View, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import { t } from 'i18next'
import Icon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import RnRestart from 'react-native-restart';
import { Gap, CustomText, CustomButton, CustomPopupModal } from '../../../components'
import { commonStyles } from '../../../theme/commonStyles'
import { scaleByHeight, moderateScale } from '../../../utils/appUtils'
import { Colors } from '../../../theme/colors'
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeLangType } from '../../../store/actions/appActions';
import { IRootState } from '../../../store/storeConfigs';

export const SettingsList: FC = () => {
    const dispatch = useDispatch();
    const { langType } = useSelector((state: IRootState) => state.App);
    const [languageModalVisible, setLanguageModalVisible] = useState<boolean>(false);

    const handleLanguageModalVisible = () => setLanguageModalVisible(true);

    const handleUpdateLanguage = (langSelected: 'en' | 'ar') => {
        dispatch(changeLangType(langSelected))
        setTimeout(() => {
            RnRestart.Restart();
        }, 150);
        setLanguageModalVisible(false);
    }


    return (
        <View>
            <TouchableOpacity
                style={[commonStyles.row, { borderBottomWidth: 1, paddingVertical: scaleByHeight(16), borderBottomColor: Colors.lightGrey }]}
                onPress={handleLanguageModalVisible}
            >
                <Icon name={'language'} size={moderateScale(20)}
                    color={Colors.grey} />
                <Gap type={'row'} gapValue={16} />
                <CustomText text={t('More.language')!} preset={'default'} style={{ color: Colors.black }} />
            </TouchableOpacity>
            <TouchableOpacity style={[commonStyles.row, { paddingVertical: scaleByHeight(8) }]}>
                <FeatherIcon name={'log-out'} size={moderateScale(20)}
                    color={Colors.grey} />
                <Gap type={'row'} gapValue={16} />
                <CustomText text={t('More.logout')!} preset={'default'} style={{ color: Colors.black }} />
            </TouchableOpacity>
            {/* popup */}
            <CustomPopupModal height={scaleByHeight(300)} visible={languageModalVisible} onModalClose={() => setLanguageModalVisible(false)}>
                <View style={[commonStyles.flex, { padding: moderateScale(24) }, commonStyles.w100, commonStyles.flex1, commonStyles.spaceBetween]}>
                    <View>
                        <CustomText text={t('More.select-language')!} preset={'subheaderBold'} style={{ color: Colors.black }} />
                        <Gap type={'col'} gapValue={32} />
                        <TouchableOpacity style={[commonStyles.row, styles.bottomBorder, commonStyles.w100]} onPress={() => handleUpdateLanguage('en')}>
                            <CustomText text={t('More.en')!} preset={'default'} style={{ color: langType === 'en' ? Colors.primary : Colors.black }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[commonStyles.row, styles.bottomBorder, commonStyles.w100]} onPress={() => { handleUpdateLanguage('ar') }}>
                            <CustomText text={t('More.ar')!} preset={'default'} style={{ color: langType === 'ar' ? Colors.primary : Colors.black }} />
                        </TouchableOpacity>
                    </View>
                    <CustomButton text={t('More.close')!} onPress={() => setLanguageModalVisible(false)} />
                </View>
            </CustomPopupModal>
        </View>
    )
}
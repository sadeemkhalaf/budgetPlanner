import React, { FC } from "react";
import { Controller } from 'react-hook-form';
import { CustomTextField } from "../../../../components";
import { commonStyles } from "../../../../theme/commonStyles";
import { ControlledFieldProps } from "./form.type";

export const ConrolledField: FC<ControlledFieldProps> = (
    { rules, name, placeholder, secureTextEntry = false, control, persistTempUser }
) => {
    return (
    <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }: any) => (
            <CustomTextField placeholder={placeholder}
                style={[commonStyles.flex, commonStyles.w100]}
                secureTextEntry={secureTextEntry}
                onEndEditing={() => persistTempUser && persistTempUser(value)}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value} />
        )}
        name={name}
        />)
}
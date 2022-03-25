import { Select } from 'antd';
import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchCheckPoints} from "../store/actions/checkPoints";
const { Option } = Select;

const SearchSelect = ( { defaultValue, setData } ) => {
    const checkPoints = useTypedSelector(state => state.checkPoints.checkPoints)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCheckPoints())
    }, [])

    function handleChange(value,target) {
        setData({name: target.title, location: value.split(',')})
    }

    return (
        <Select
            defaultValue={defaultValue}
            onChange={handleChange}
            style={{ width: '100%' }}
        >
            {
                checkPoints.map(item =>
                    <Option key={item.location.join(',')} title={item.name} value={item.location.join(',')}>{item.name}</Option>
                )
            }
        </Select>
    );
};

export default SearchSelect;
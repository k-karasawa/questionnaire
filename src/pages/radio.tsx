import React, { useState } from 'react';
import { Button, Modal, Toast, Divider } from 'antd-mobile';
import { Input, Radio } from 'antd';
import { DemoBlock } from '../demos-util';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { RadioChangeEvent } from 'antd/lib/radio';


const { TextArea } = Input;

const radio: React.FC = () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());
    const [radioValues, setRadioValues] = useState([null, null, null, null, null]);
  
    const showModal = () => {
      Modal.confirm({
          content: '本当に提出しますか？',
          confirmText: '提出する',
          cancelText: 'キャンセル',
          onConfirm: async () => {
            Toast.show({
              icon: 'success',
              content: '回答しました',
              position: 'center',
            });
          },
      });
    };

    const onChange = (index: number) => (e: RadioChangeEvent) => {
        const newRadioValues = [...radioValues];
        newRadioValues[index] = e.target.value;
        setRadioValues(newRadioValues);
    };
  
  return (
    <div style={{ margin: '40px 20px 20px 20px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="日付を選択"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />

        <Divider contentPosition='left' style={{ margin: '40px 0px 0px 0px' }}>回答内容</Divider>
        {Array.from({length: 5}, (_, i) => i + 1).map(num => (
          <div key={num}>
            <h3>設問{num}</h3>
            <Radio.Group onChange={onChange(num - 1)} value={radioValues[num - 1]} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Radio value={1}>1</Radio>
              <Radio value={2}>2</Radio>
              <Radio value={3}>3</Radio>
              <Radio value={4}>4</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>
          </div>
        ))}
        
        <DemoBlock title='備考: ここに備考を入力'>
          <TextArea 
            placeholder="備考を入力してください"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </DemoBlock>

        <DemoBlock title=''>
          <Button block color='primary' size='large' onClick={showModal}>
            回答する
          </Button>
        </DemoBlock>
      </LocalizationProvider>
    </div>
  )
};

export default radio;
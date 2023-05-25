import React, { useState } from 'react';
import { Slider, Button, Modal, Toast, Divider, Space } from 'antd-mobile';
import { Input } from 'antd';
import { DemoBlock } from '../demos-util';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';


const { TextArea } = Input;
// const now = new Date();
const now = dayjs();
const marks = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5
}


const SliderPages: React.FC = () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  
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
  

  return (
    <div style={{ margin: '40px 20px 20px 20px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="日付を選択"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />

        <Divider contentPosition='left' style={{ margin: '40px 0px 0px 0px' }}>回答内容</Divider>
        <DemoBlock title='設問1: ここに設問を表示'>
          <Slider marks={marks} ticks max={4} />
        </DemoBlock>
        <DemoBlock title='設問2: ここに設問を表示'>
          <Slider marks={marks} ticks max={4} />
        </DemoBlock>
        <DemoBlock title='設問3: ここに設問を表示'>
          <Slider marks={marks} ticks max={4} />
        </DemoBlock>
        <DemoBlock title='設問4: ここに設問を表示'>
          <Slider marks={marks} ticks max={4} />
        </DemoBlock>
        <DemoBlock title='設問5: ここに設問を表示'>
          <Slider marks={marks} ticks max={4} />
        </DemoBlock>
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

export default SliderPages;
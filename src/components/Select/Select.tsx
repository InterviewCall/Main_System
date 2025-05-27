import { FC } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectProps {
  options: string[]
  value?: string
  onChange: (value: string) => void
}

const SelectAnswer: FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className='w-full p-5 bg-white rounded-xl'>
        <SelectValue placeholder='Select Option' />
      </SelectTrigger>
      <SelectContent className='bg-white rounded-xl'>
        <SelectGroup className='w-full'>
          {options.map((option) => (
            <SelectItem
              key={option}
              value={option}
              className='data-[highlighted]:bg-blue-100 px-4 py-2 w-full data-[highlighted]:text-blue-600 data-[highlighted]:rounded-xl bg-white cursor-pointer'
            >
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectAnswer;

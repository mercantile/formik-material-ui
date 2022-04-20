import { storiesOf } from '@storybook/react';
import React from 'react';
import AutocompleteStory from './Autocomplete.story';
import CheckboxStory from './Checkbox.story';
import InputBaseStory from './InputBase.story';
import KitchenSinkStory from './KitchenSink.story';
import RadioGroupStory from './RadioGroup.story.tsx';
import SelectStory from './Select.story';
import SimpleFileUploadStory from './SimpleFileUpload.story';
import SwitchesStory from './Switches.story';
import TextFieldStory from './TextField.story';
import ToggleButtonGroupStory from './ToggleButtonGroup.story';
import DatePickerStory from './x/DatePicker.story.tsx';
import DateTimePickerStory from './x/DateTimePicker.story.tsx';
import TimePickerStory from './x/TimePicker.story.tsx';

storiesOf('Formik', module)
  .add('Text Field', () => <TextFieldStory />)
  .add('Input Base', () => <InputBaseStory />)
  .add('Radio Group', () => <RadioGroupStory />)
  .add('Select', () => <SelectStory />)
  .add('Checkbox', () => <CheckboxStory />)
  .add('Switches', () => <SwitchesStory />)
  .add('Simple File Upload', () => <SimpleFileUploadStory />)
  .add('Toggle Button Group', () => <ToggleButtonGroupStory />)
  .add('Autocomplete', () => <AutocompleteStory />)
  .add('Kitchen Sink', () => <KitchenSinkStory />)
  .add('Date Picker', () => <DatePickerStory />)
  .add('Time Picker', () => <TimePickerStory />)
  .add('Date and Time Picker', () => <DateTimePickerStory />);

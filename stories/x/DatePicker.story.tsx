import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { action } from '@storybook/addon-actions';
import { subDays } from 'date-fns';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import { DatePicker } from '../../packages/formik-mui-x/src/DatePicker';
import { DesktopDatePicker } from '../../packages/formik-mui-x/src/DesktopDatePicker';
import { MobileDatePicker } from '../../packages/formik-mui-x/src/MobileDatePicker';
import { StaticDatePicker } from '../../packages/formik-mui-x/src/StaticDatePicker';
import FormValues from '../FormValues';
import Wrapper from '../Wrapper';

interface Values {
  date: Date | null;
}

const schema = yup.object().shape({
  date: yup.date().required(),
  futureDate: yup.date().required().min(subDays(new Date(), 1)),
});

const DatePickerStory = () => (
  <Wrapper title="Date Picker">
    <Formik<Values>
      initialValues={{
        date: new Date(),
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
    >
      {({ submitForm, isSubmitting, values }) => (
        <Form>
          <Field
            component={DatePicker}
            label="Date"
            name="date"
            textField={{ helperText: 'Helper text' }}
          />
          <br />
          <br />
          <Field
            component={DatePicker}
            label="Date filled"
            name="dateFilled"
            textField={{ variant: 'filled' }}
          />
          <br />
          <br />
          <Field
            component={DesktopDatePicker}
            label="Desktop date picker"
            name="desktopDate"
            inputFormat="MM/dd/yyyy"
          />
          <br />
          <br />
          <Field
            component={DesktopDatePicker}
            label="Future Desktop date picker"
            name="futureDate"
            inputFormat="MM/dd/yyyy"
          />
          <br />
          <br />
          <Field
            component={MobileDatePicker}
            label="Mobile date picker"
            name="mobileDate"
            inputFormat="MM/dd/yyyy"
          />
          <br />
          <br />
          <Field
            component={StaticDatePicker}
            label="Static date picker"
            name="staticDate"
            inputFormat="MM/dd/yyyy"
          />
          <br />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
          <br />
          <FormValues values={values} />
        </Form>
      )}
    </Formik>
  </Wrapper>
);

export default DatePickerStory;

import {
  FieldValues,
  FormProvider as Form,
  UseFormReturn,
} from 'react-hook-form';

export interface FormProviderProps<V extends FieldValues> {
  children: React.ReactNode;
  methods: UseFormReturn<V>;
  onSubmit?: VoidFunction;
}

export const FormProvider = <V extends FieldValues>(
  props: FormProviderProps<V>,
) => {
  const { children, onSubmit, methods } = props;
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

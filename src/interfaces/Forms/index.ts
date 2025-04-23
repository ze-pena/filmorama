type ButtonType = 'button' | 'submit';

interface Input {
  placeholder?: string;
  name: string;
}

interface Button {
  type: ButtonType;
  name: string;
}

type InputChange = React.ChangeEvent<HTMLInputElement>;

type FormSubmit = React.FormEvent<HTMLFormElement>;

export type { Input, Button, InputChange, FormSubmit };

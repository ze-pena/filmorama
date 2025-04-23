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

type ButtonClick = React.MouseEvent<HTMLButtonElement>;

export type { Input, Button, InputChange, FormSubmit, ButtonClick };

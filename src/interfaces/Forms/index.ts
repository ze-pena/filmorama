type ButtonType = 'button' | 'submit';

interface Input {
  placeholder?: string;
  name: string;
}

interface Button {
  type: ButtonType;
  name: string;
}

export type { Input, Button };

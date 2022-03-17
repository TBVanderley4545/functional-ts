export const writeMessage = (
  message: string,
  salutation: string,
  name: string
) => `${message}\n\n${salutation},\n${name}`;

export const signMessageWith =
  (salutation: string) => (message: string, name: string) =>
    writeMessage(message, salutation, name);

export const writeBusinessMemo = signMessageWith('Best');

export const makeSignature =
  (salutation: string, name: string) => (message: string) =>
    writeMessage(message, salutation, name);

export const writeLoveLetter = makeSignature('Thine evermore', 'William');

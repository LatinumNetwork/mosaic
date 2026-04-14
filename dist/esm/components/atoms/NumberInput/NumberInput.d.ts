export interface NumberInputProps {
    value: number;
    setValue: (value: number) => void;
    min: number;
    max: number;
}
declare const NumberInput: ({ value, setValue, min, max }: NumberInputProps) => import("react/jsx-runtime").JSX.Element;
export { NumberInput };

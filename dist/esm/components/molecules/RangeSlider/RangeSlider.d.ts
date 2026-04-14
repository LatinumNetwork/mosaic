export interface RangeSliderProps {
    min: number;
    max: number;
    values: [number, number];
    setValues: (value: [number, number]) => void;
    showNumberInputs?: boolean;
}
export declare const RangeSlider: ({ min, max, values, setValues, showNumberInputs, }: RangeSliderProps) => import("react/jsx-runtime").JSX.Element;

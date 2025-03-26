import { ValueTransformer } from 'typeorm';

export const bigintTransformer: ValueTransformer = {
    to: (value: number) => value,
    from: (value: string): number => parseInt(value, 10),
};

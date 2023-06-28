import type { InputHTMLAttributes } from "react";

export type InputProps = {
    name: InputHTMLAttributes<HTMLInputElement>['name']
    type: InputHTMLAttributes<HTMLInputElement>['type']
    label: string
    placeholder: string
    className?: string
}
import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
    textStyles?: string
    rightIcon?: string
    isDisabled?: boolean
}

export interface OptionProps {
    title: string
    value: string
}

export interface CustomFilterProps {
    title: string,
    options: OptionProps[];
}

export interface SearchManufacturerProps {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}

export interface CarProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
}

export interface FilterProps {
    manufacturer:  string
    model: string
    year: number
    limit: number
    fuel: string
}

export interface ShowMoreProps {
    pageNumber: number
    isNext: boolean
}
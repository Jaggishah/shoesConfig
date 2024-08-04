import { proxy } from "valtio";


export const initialData = {
    current: '',
    currentColor : '#ffffff'

}
export let whole = proxy(initialData);
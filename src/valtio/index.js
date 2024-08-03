import { proxy } from "valtio";


export const initialData = {
    current: null
}
export let whole = proxy(initialData);
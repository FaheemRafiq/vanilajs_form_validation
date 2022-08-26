import { format } from "date-fns";

export function getDate(){
    let f = format(new Date() , "yyyy-MM-dd");
    return f;
}
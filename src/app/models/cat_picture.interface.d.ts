import {Breed} from "./breed.interface";
import {Category} from "./category.interface";

interface CatPicture {
    breeds: Array<Breed>
    categories: Array<Category>
    height: number;
    id: string;
    url: string;
    width: number;
}

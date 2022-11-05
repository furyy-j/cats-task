import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {Breed} from "../models/breed.interface";
import {Category} from "../models/category.interface";


@Injectable({
  providedIn: 'root'
})
export class SearchcatService {

  constructor(private httpClient: HttpClient) { }

  getAllBreedsApi(): Observable<Array<Breed>> {
    return this.httpClient.get<Array<Breed>>('https://api.thecatapi.com/v1/breeds');
  }


  getAllCategoriesApi():  Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>('https://api.thecatapi.com/v1/categories');
  }

  getCatsPicturesApi(formValues: any) {
    const { pageSize, currentPage, selectedBreed, selectedCategory } = formValues;
    let queryParams = new HttpParams().append('limit', pageSize).append('order', 'asc').append('page', currentPage)
    if (selectedBreed) {
      queryParams = queryParams.append('breed_ids', selectedBreed)
    }
    if (selectedCategory) {
      queryParams = queryParams.append('category_ids', selectedCategory)
    }
    return this.httpClient.get(`https://api.thecatapi.com/v1/images/search`, { observe: 'response', params: queryParams });
  }
}

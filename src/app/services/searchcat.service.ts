import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchcatService {

  constructor(private httpClient: HttpClient) { }

  getAllBreedsApi() {
    return this.httpClient.get('https://api.thecatapi.com/v1/breeds');
  }

  getAllCategoriesApi() {
    return this.httpClient.get('https://api.thecatapi.com/v1/categories');
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

import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { pipe, Subject, Subscription, switchMap } from 'rxjs';
import {SearchcatService} from "../../../services/searchcat.service";
import {SpinnerService} from "../../spinner/spinner/spinner.service";

@Component({
  selector: 'app-searchcat',
  templateUrl: './searchcat.component.html',
  styleUrls: ['./searchcat.component.scss']
})
export class SearchcatComponent implements OnInit, OnDestroy {

  data: any = [];
  catBreeds: any = [];
  catCategories = [];
  totalCount: number = 0;
  pageSizeOptions: number[] = [10, 25, 50, 100];
  filterForm: FormGroup = this.fb.group({
    selectedBreed: '',
    selectedCategory: '',
    pageSize: 10,
    currentPage: 0,
  });
  searchTexts: FormGroup = this.fb.group({
    breedSearchText: '',
    categorySearchText: ''
  })
  subscription = new Subscription();
  private catPicturesLookup$: Subject<void> = new Subject();
  constructor(
      private httpClient: HttpClient,
      private fb: FormBuilder,
      private catSearchService: SearchcatService,
      private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.getAllBreeds() // get all breeds
    this.getAllCategories() // get all categories
    this.subscribeToChanges()
    this.getCatPictures()
    this.filterForm.updateValueAndValidity()
  }

  getAllBreeds() {
    try {
      this.spinnerService.show('get-breeds')
      this.catSearchService.getAllBreedsApi().subscribe((res: any) => {
        this.spinnerService.hide('get-breeds')
        this.catBreeds = res;
      })
    } catch (e) {
      this.spinnerService.hide('get-breeds')
    }
  }

  getAllCategories() {
    try {
      this.spinnerService.show('get-categories')
      this.catSearchService.getAllCategoriesApi().subscribe((res: any) => {
        this.spinnerService.hide('get-categories')
        this.catCategories = res;
      })
    } catch (e) {
      this.spinnerService.hide('get-categories')
    }
  }

  getCatPictures() {
    // switchMap will cancel the previous api call if current api call is still in pending state
    try {
      this.catPicturesLookup$
          .pipe(switchMap(() => {
            this.spinnerService.show('get-cat-pictures')
            return this.catSearchService.getCatsPicturesApi(this.filterForm.value)
          }))
          .subscribe(res => {
            this.spinnerService.hide('get-cat-pictures')
            this.totalCount = (res.headers.get('Pagination-Count') as any) as number;
            this.data = res.body;
            this.unSubscribeToChanges()
            // check if total count > page size * currentPage else reset pagination
            this.resetPagination(res)
            this.subscribeToChanges()
          });
    } catch (e) {
      this.spinnerService.hide('get-cat-pictures')
    }
  }

  subscribeToChanges() {
    this.subscription = (this.filterForm.valueChanges.subscribe(() => {
      this.catPicturesLookup$.next();
    }));
  }

  unSubscribeToChanges() {
    this.subscription.unsubscribe()
  }

  resetPagination(res: HttpResponse<any>) {
    const currentPage = (res.headers.get('pagination-page') as any) as number;
    const currentPageSize = (res.headers.get('pagination-limit') as any) as number;
    if (this.totalCount < currentPage * currentPageSize)
      this.filterForm.patchValue({
        currentPage: 0
      })
  }

  onBreedSearch(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }

  onPageChange(event: PageEvent) {
    this.filterForm.patchValue({
      pageSize: event.pageSize,
      currentPage: event.pageIndex
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

import {Component, OnInit} from '@angular/core';
import {Book} from "../model/book.model";
import {Category} from "../model/category.model";
import {BookService} from "../service/book.service";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  newBook: Book = new Book()

  categories: Category[] = Object.values(Category)

  constructor(private bookService: BookService,
              private notificationService: NotificationService) {

  }

  ngOnInit(): void {
    this.newBook.active = true
    this.newBook.content = 'Lorem ipsum dolor sit amet, eros eu ornare commodo, nulla tellus feugiat est, eu tempor mi velit a elit.'
    this.newBook.logo = 'logo 1'
    this.newBook.publisher = 'publisher 1'
    this.newBook.price = 10000
    this.newBook.title = 'book 1'
    this.newBook.category = Category.AutoBiography
    this.newBook.publishedDate = new Date()
  }

  save() {
    this.bookService.save(this.newBook, 7).subscribe(value => {
      this.notificationService.success("Create book: " + value.title + ' successfully')
    }, error => {

    })
  }
}

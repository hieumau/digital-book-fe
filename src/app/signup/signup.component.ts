import {Component, OnInit} from '@angular/core';
import {Author} from "../model/author.model";
import {AuthorService} from "../service/author.service";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authorService: AuthorService,
              private notificationService: NotificationService) {
  }

  newAuthor: Author = new Author()

  ngOnInit(): void {
  }

  save() {
    if (!this.newAuthor || this.newAuthor.name == null || this.newAuthor.name.trim().length == 0) {
      this.notificationService.error("Author name can't empty!")
    } else {
      this.authorService.save(this.newAuthor).subscribe(value => {
        this.notificationService.success("New author created: " + value.name)
      })
    }
  }
}

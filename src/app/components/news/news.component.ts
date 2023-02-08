import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  title: string = '';
  img: string = '';
  description: string = '';
  date: string = '';

  arrayNews: Post[] = [];

  constructor() {
    this.arrayNews = [
      {
        title: 'Welcome to the blog',
        img: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: '2/1/2023',
      },
      {
        title: 'First publication',
        img: 'https://images.pexels.com/photos/3601081/pexels-photo-3601081.jpeg',
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        date: '2/2/2023',
      },
    ];
  }

  addNewPost(): void {
    let newPost: Post = {
      title: this.title,
      img: this.img,
      description: this.description,
      date: this.date,
    };
    //console.log(this.arrayNews)
    if (this.title && this.img && this.description && this.date !== '') {
      this.arrayNews.push(newPost);
      this.title = '';
      this.img = '';
      this.description = '';
      this.date = '';

    } else {
      alert('Algún campo está vacío');
    }
  }
}

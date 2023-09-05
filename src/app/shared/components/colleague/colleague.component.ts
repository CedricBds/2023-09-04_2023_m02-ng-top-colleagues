import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent {
  @Input({ required: true }) colleague: Colleague[] | undefined;

  constructor() {
    this.colleague = [
      {
        pseudo: 'Cedric',
        score: 5,
        photo:
          'https://imgs.search.brave.com/zBC2y2HCBRAsggmj2ReQzSpvDbo1WcMqjXZytYEGCEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTQ4NDQ5L2ZyL3Bo/b3RvL2JsYW5jLWxh/bWEtZW4tYXJnZW50/aW5lLWVuLWFtJUMz/JUE5cmlxdWUtZHUt/c3VkLWRlLWxhLXBy/b3ZpbmNlLWRlLXNh/bHRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pZV9jYTlE/YUR4RkQ4a0Y2ZWtU/LXFGQVROc0FnX3Jl/SEhpaEN5dHZaZnRN/PQ',
      },
      {
        pseudo: 'Thomas',
        score: 10000,
        photo:
          'https://imgs.search.brave.com/zBC2y2HCBRAsggmj2ReQzSpvDbo1WcMqjXZytYEGCEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTQ4NDQ5L2ZyL3Bo/b3RvL2JsYW5jLWxh/bWEtZW4tYXJnZW50/aW5lLWVuLWFtJUMz/JUE5cmlxdWUtZHUt/c3VkLWRlLWxhLXBy/b3ZpbmNlLWRlLXNh/bHRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pZV9jYTlE/YUR4RkQ4a0Y2ZWtU/LXFGQVROc0FnX3Jl/SEhpaEN5dHZaZnRN/PQ',
      },
      {
        pseudo: 'Victor',
        score: 10000,
        photo:
          'https://imgs.search.brave.com/zBC2y2HCBRAsggmj2ReQzSpvDbo1WcMqjXZytYEGCEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTQ4NDQ5L2ZyL3Bo/b3RvL2JsYW5jLWxh/bWEtZW4tYXJnZW50/aW5lLWVuLWFtJUMz/JUE5cmlxdWUtZHUt/c3VkLWRlLWxhLXBy/b3ZpbmNlLWRlLXNh/bHRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pZV9jYTlE/YUR4RkQ4a0Y2ZWtU/LXFGQVROc0FnX3Jl/SEhpaEN5dHZaZnRN/PQ',
      },
      {
        pseudo: 'Moula',
        score: 1000,
        photo:
          'https://imgs.search.brave.com/zBC2y2HCBRAsggmj2ReQzSpvDbo1WcMqjXZytYEGCEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTQ4NDQ5L2ZyL3Bo/b3RvL2JsYW5jLWxh/bWEtZW4tYXJnZW50/aW5lLWVuLWFtJUMz/JUE5cmlxdWUtZHUt/c3VkLWRlLWxhLXBy/b3ZpbmNlLWRlLXNh/bHRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pZV9jYTlE/YUR4RkQ4a0Y2ZWtU/LXFGQVROc0FnX3Jl/SEhpaEN5dHZaZnRN/PQ',
      },
      {
        pseudo: 'Mattéo',
        score: 1000,
        photo:
          'https://imgs.search.brave.com/zBC2y2HCBRAsggmj2ReQzSpvDbo1WcMqjXZytYEGCEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTQ4NDQ5L2ZyL3Bo/b3RvL2JsYW5jLWxh/bWEtZW4tYXJnZW50/aW5lLWVuLWFtJUMz/JUE5cmlxdWUtZHUt/c3VkLWRlLWxhLXBy/b3ZpbmNlLWRlLXNh/bHRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pZV9jYTlE/YUR4RkQ4a0Y2ZWtU/LXFGQVROc0FnX3Jl/SEhpaEN5dHZaZnRN/PQ',
      },
    ];
  }
}

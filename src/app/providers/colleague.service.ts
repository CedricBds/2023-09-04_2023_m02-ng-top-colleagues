import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor(private http:HttpClient) {
   }

   list(){
    return this.http.get<Colleague[]>("https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues");
    //données api
    // return [
    //   {
    //     pseudo: 'Cedric',
    //     score: -9999,
    //     photo:
    //       'https://imgs.search.brave.com/zBC2y2HCBRAsggmj2ReQzSpvDbo1WcMqjXZytYEGCEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTQ4NDQ5L2ZyL3Bo/b3RvL2JsYW5jLWxh/bWEtZW4tYXJnZW50/aW5lLWVuLWFtJUMz/JUE5cmlxdWUtZHUt/c3VkLWRlLWxhLXBy/b3ZpbmNlLWRlLXNh/bHRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pZV9jYTlE/YUR4RkQ4a0Y2ZWtU/LXFGQVROc0FnX3Jl/SEhpaEN5dHZaZnRN/PQ',
    //   },
    //   {
    //     pseudo: 'mattéo',
    //     score: 10000,
    //     photo:
    //       'https://imgs.search.brave.com/zBC2y2HCBRAsggmj2ReQzSpvDbo1WcMqjXZytYEGCEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTQ4NDQ5L2ZyL3Bo/b3RvL2JsYW5jLWxh/bWEtZW4tYXJnZW50/aW5lLWVuLWFtJUMz/JUE5cmlxdWUtZHUt/c3VkLWRlLWxhLXBy/b3ZpbmNlLWRlLXNh/bHRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pZV9jYTlE/YUR4RkQ4a0Y2ZWtU/LXFGQVROc0FnX3Jl/SEhpaEN5dHZaZnRN/PQ',
    //   },
    //   {
    //     pseudo: 'Thomas',
    //     score: 10000,
    //     photo:
    //       'https://imgs.search.brave.com/zBC2y2HCBRAsggmj2ReQzSpvDbo1WcMqjXZytYEGCEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTQ4NDQ5L2ZyL3Bo/b3RvL2JsYW5jLWxh/bWEtZW4tYXJnZW50/aW5lLWVuLWFtJUMz/JUE5cmlxdWUtZHUt/c3VkLWRlLWxhLXBy/b3ZpbmNlLWRlLXNh/bHRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pZV9jYTlE/YUR4RkQ4a0Y2ZWtU/LXFGQVROc0FnX3Jl/SEhpaEN5dHZaZnRN/PQ',
    //   },
  
    //   {
    //     pseudo: 'Victor',
    //     score: 10000,
    //     photo:
    //       'https://imgs.search.brave.com/zBC2y2HCBRAsggmj2ReQzSpvDbo1WcMqjXZytYEGCEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTQ4NDQ5L2ZyL3Bo/b3RvL2JsYW5jLWxh/bWEtZW4tYXJnZW50/aW5lLWVuLWFtJUMz/JUE5cmlxdWUtZHUt/c3VkLWRlLWxhLXBy/b3ZpbmNlLWRlLXNh/bHRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pZV9jYTlE/YUR4RkQ4a0Y2ZWtU/LXFGQVROc0FnX3Jl/SEhpaEN5dHZaZnRN/PQ',
    //   },
    //   {
    //     pseudo: 'Moula',
    //     score: 10000,
    //     photo:
    //       'https://imgs.search.brave.com/zBC2y2HCBRAsggmj2ReQzSpvDbo1WcMqjXZytYEGCEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/OTQ4NDQ5L2ZyL3Bo/b3RvL2JsYW5jLWxh/bWEtZW4tYXJnZW50/aW5lLWVuLWFtJUMz/JUE5cmlxdWUtZHUt/c3VkLWRlLWxhLXBy/b3ZpbmNlLWRlLXNh/bHRhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pZV9jYTlE/YUR4RkQ4a0Y2ZWtU/LXFGQVROc0FnX3Jl/SEhpaEN5dHZaZnRN/PQ',
    //   },
    // ];
  }
}

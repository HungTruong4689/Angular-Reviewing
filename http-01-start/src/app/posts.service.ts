import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  error = new Subject<string>();
  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    //embedded link post
   
  }
  
}

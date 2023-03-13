import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { MoviesResponse } from './movies';

@Injectable()
export class MoviesService {
    constructor(private readonly httpService: HttpService) {}

    async GetMovies(data: MoviesResponse) {
        const response = await lastValueFrom(this.httpService.get('https://api.themoviedb.org/3/movie/top_rated?api_key=b9da6f1a1fbda60569b9015dc3d080bc'))
        console.log(response.data);
        return response.status == 200;
    }
  
}
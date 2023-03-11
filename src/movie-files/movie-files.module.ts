import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MoviesService } from './moviedatabase/movies.service';


@Module({
    imports: [HttpModule],
    providers: [MoviesService],
})
export class MovieFilesModule {}

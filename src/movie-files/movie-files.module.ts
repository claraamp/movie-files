import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MoviesService } from './moviedatabase/movies.service';
import { FilesController } from './files/files.controller';
import { FilesService } from './files/gofile.service';


@Module({
    imports: [HttpModule],
    providers: [MoviesService, FilesService],
    controllers: [FilesController],
})
export class MovieFilesModule {}
